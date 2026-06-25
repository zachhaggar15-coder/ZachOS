"use client";

import { useRouter } from "next/navigation";
import { type FormEvent, useMemo, useState } from "react";

import { importGarminCsv } from "@/app/actions";

type ParsedCsv = {
  headers: string[];
  rows: Record<string, string>[];
};

const FIELD_OPTIONS = [
  { label: "Ignore", value: "ignore" },
  { label: "Date", value: "date" },
  { label: "Activity type", value: "activity_type" },
  { label: "Distance km", value: "distance_km" },
  { label: "Duration minutes", value: "duration_minutes" },
  { label: "Average HR", value: "avg_hr" },
  { label: "Max HR", value: "max_hr" },
  { label: "Calories", value: "calories" },
  { label: "Training effect", value: "training_effect" },
  { label: "Notes", value: "notes" },
  { label: "Sleep score", value: "sleep_score" },
  { label: "Sleep hours", value: "sleep_hours" },
  { label: "HRV", value: "hrv" },
  { label: "Resting HR", value: "resting_hr" },
  { label: "Training load", value: "training_load" },
  { label: "Weekly distance km", value: "weekly_distance_km" },
  { label: "Training status", value: "training_status" },
] as const;

const selectClass =
  "h-10 rounded border border-white/10 bg-[#0b1016] px-3 text-sm text-zinc-100 outline-none transition focus:border-cyan-300/70";

function normaliseHeader(header: string) {
  return header.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function autoMapHeader(header: string) {
  const normalised = normaliseHeader(header);

  if (normalised.includes("date") || normalised.includes("starttime")) {
    return "date";
  }
  if (normalised.includes("activitytype") || normalised === "type") {
    return "activity_type";
  }
  if (normalised.includes("distance")) {
    return "distance_km";
  }
  if (
    normalised.includes("duration") ||
    normalised === "time" ||
    normalised.includes("elapsedtime")
  ) {
    return "duration_minutes";
  }
  if (normalised.includes("averageheartrate") || normalised.includes("avghr")) {
    return "avg_hr";
  }
  if (normalised.includes("maxheartrate") || normalised.includes("maxhr")) {
    return "max_hr";
  }
  if (normalised.includes("calorie")) {
    return "calories";
  }
  if (normalised.includes("trainingeffect")) {
    return "training_effect";
  }
  if (normalised.includes("note") || normalised.includes("description")) {
    return "notes";
  }
  if (normalised.includes("sleepscore") || normalised === "sleep") {
    return "sleep_score";
  }
  if (normalised.includes("sleephour")) {
    return "sleep_hours";
  }
  if (normalised.includes("hrv")) {
    return "hrv";
  }
  if (
    normalised.includes("restingheartrate") ||
    normalised.includes("restinghr")
  ) {
    return "resting_hr";
  }
  if (normalised.includes("trainingload") || normalised.includes("acuteload")) {
    return "training_load";
  }
  if (normalised.includes("weeklydistance")) {
    return "weekly_distance_km";
  }
  if (normalised.includes("trainingstatus") || normalised === "status") {
    return "training_status";
  }

  return "ignore";
}

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let cell = "";
  let row: string[] = [];
  let inQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === '"' && inQuotes && next === '"') {
      cell += '"';
      index += 1;
      continue;
    }

    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (char === "," && !inQuotes) {
      row.push(cell.trim());
      cell = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") {
        index += 1;
      }
      row.push(cell.trim());
      if (row.some(Boolean)) {
        rows.push(row);
      }
      cell = "";
      row = [];
      continue;
    }

    cell += char;
  }

  row.push(cell.trim());
  if (row.some(Boolean)) {
    rows.push(row);
  }

  return rows;
}

function toParsedCsv(text: string): ParsedCsv {
  const [headers = [], ...dataRows] = parseCsv(text);
  const cleanedHeaders = headers.map((header, index) => header || `Column ${index + 1}`);

  return {
    headers: cleanedHeaders,
    rows: dataRows
      .map((cells) =>
        Object.fromEntries(
          cleanedHeaders.map((header, index) => [header, cells[index] ?? ""]),
        ),
      )
      .filter((row) => Object.values(row).some(Boolean)),
  };
}

export function GarminImportTool() {
  const [parsedCsv, setParsedCsv] = useState<ParsedCsv | null>(null);
  const [mapping, setMapping] = useState<Record<string, string>>({});
  const [fileName, setFileName] = useState("");
  const [parseError, setParseError] = useState("");
  const [zipImportError, setZipImportError] = useState("");
  const [zipImportResult, setZipImportResult] = useState("");
  const [zipImporting, setZipImporting] = useState(false);
  const router = useRouter();

  const usableMapping = useMemo(
    () =>
      Object.fromEntries(
        Object.entries(mapping).filter(([, value]) => value !== "ignore"),
      ),
    [mapping],
  );

  async function handleFile(file: File | undefined) {
    if (!file) {
      return;
    }

    setParseError("");
    setFileName(file.name);

    try {
      const text = await file.text();
      const parsed = toParsedCsv(text);

      if (!parsed.headers.length || !parsed.rows.length) {
        setParsedCsv(null);
        setMapping({});
        setParseError("No rows were found in that CSV.");
        return;
      }

      setParsedCsv(parsed);
      setMapping(
        Object.fromEntries(
          parsed.headers.map((header) => [header, autoMapHeader(header)]),
        ),
      );
    } catch {
      setParsedCsv(null);
      setMapping({});
      setParseError("The CSV could not be parsed.");
    }
  }

  async function importGarminExportZip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fileInput = form.elements.namedItem("garmin_zip");
    const file =
      fileInput instanceof HTMLInputElement ? fileInput.files?.[0] : null;

    if (!file) {
      setZipImportError("Choose the Garmin account export ZIP first.");
      return;
    }

    setZipImportError("");
    setZipImportResult("");
    setZipImporting(true);

    try {
      const response = await fetch("/api/garmin-export/import", {
        body: file,
        headers: {
          "Content-Type": file.type || "application/zip",
        },
        method: "POST",
      });
      const payload = (await response.json()) as {
        activitiesImported?: number;
        error?: string;
        fitnessDaysImported?: number;
        jsonFilesRead?: number;
        latestActivityDate?: string | null;
        latestFitnessDate?: string | null;
      };

      if (!response.ok) {
        throw new Error(payload.error || "Garmin export import failed.");
      }

      setZipImportResult(
        `Imported ${payload.activitiesImported ?? 0} activities and ${
          payload.fitnessDaysImported ?? 0
        } fitness metric days from ${
          payload.jsonFilesRead ?? 0
        } Garmin JSON files. Latest activity: ${
          payload.latestActivityDate ?? "none"
        }. Latest fitness day: ${payload.latestFitnessDate ?? "none"}.`,
      );
      form.reset();
      router.refresh();
    } catch (error) {
      setZipImportError(
        error instanceof Error
          ? error.message
          : "Garmin export import failed.",
      );
    } finally {
      setZipImporting(false);
    }
  }

  return (
    <div className="grid gap-6">
      <section className="rounded border border-cyan-200/20 bg-cyan-200/[0.045] p-5">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-cyan-200/70">
          Historical Garmin export
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white">
          Import full Garmin history
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-400">
          Upload the original Garmin account export ZIP. Zach OS will import
          historical activity summaries, sleep scores, HRV, resting HR,
          training status and acute training load where those files exist.
        </p>
        <form
          className="mt-5 grid gap-3 md:grid-cols-[1fr_auto]"
          onSubmit={importGarminExportZip}
        >
          <input
            accept=".zip,application/zip,application/x-zip-compressed"
            className="h-10 rounded border border-white/10 bg-black/20 px-3 py-2 text-sm text-zinc-100 file:mr-3 file:rounded file:border-0 file:bg-cyan-200 file:px-3 file:py-1 file:text-sm file:font-semibold file:text-slate-950"
            name="garmin_zip"
            type="file"
          />
          <button
            className="h-10 rounded bg-cyan-200 px-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={zipImporting}
            type="submit"
          >
            {zipImporting ? "Importing..." : "Import Garmin history"}
          </button>
        </form>
        <p className="mt-3 text-xs leading-5 text-zinc-500">
          Large Garmin exports are best imported while running Zach OS locally.
          The import is safe to rerun because rows are upserted by date or
          Garmin activity ID.
        </p>
        {zipImportResult && (
          <p className="mt-3 rounded border border-emerald-300/25 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-100">
            {zipImportResult}
          </p>
        )}
        {zipImportError && (
          <p className="mt-3 rounded border border-rose-300/25 bg-rose-400/10 px-3 py-2 text-sm text-rose-100">
            {zipImportError}
          </p>
        )}
      </section>

      <section className="rounded border border-white/10 bg-white/[0.035] p-5">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-cyan-200/70">
          Manual Garmin export
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white">
          Garmin Import
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-400">
          Upload an exported Garmin CSV, review the parsed rows, map columns to
          Zach OS fields, then save. This does not use Garmin credentials,
          unofficial APIs or Garmin Connect scraping.
        </p>
        <label className="mt-5 flex cursor-pointer flex-col items-center justify-center rounded border border-dashed border-cyan-200/30 bg-cyan-200/[0.035] px-4 py-8 text-center transition hover:bg-cyan-200/[0.06]">
          <span className="text-sm font-semibold text-cyan-100">
            Upload CSV
          </span>
          <span className="mt-1 text-xs text-zinc-500">
            Activity exports, health exports, or mixed CSVs
          </span>
          <input
            accept=".csv,text/csv"
            className="sr-only"
            onChange={(event) => handleFile(event.target.files?.[0])}
            type="file"
          />
        </label>
        {fileName && (
          <p className="mt-3 text-sm text-zinc-500">
            Loaded <span className="text-zinc-200">{fileName}</span>
          </p>
        )}
        {parseError && (
          <p className="mt-3 rounded border border-rose-300/25 bg-rose-400/10 px-3 py-2 text-sm text-rose-100">
            {parseError}
          </p>
        )}
      </section>

      {parsedCsv && (
        <form action={importGarminCsv} className="grid gap-6">
          <input
            name="rows_json"
            type="hidden"
            value={JSON.stringify(parsedCsv.rows)}
          />
          <input
            name="mapping_json"
            type="hidden"
            value={JSON.stringify(usableMapping)}
          />

          <section className="rounded border border-white/10 bg-white/[0.035] p-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-cyan-200/70">
                  Column mapping
                </p>
                <h2 className="mt-1 text-lg font-semibold text-white">
                  Map CSV columns to Zach OS fields
                </h2>
              </div>
              <p className="text-sm text-zinc-500">
                {parsedCsv.rows.length} rows ready to preview
              </p>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {parsedCsv.headers.map((header) => (
                <label className="grid gap-1.5 text-sm text-zinc-300" key={header}>
                  {header}
                  <select
                    className={selectClass}
                    onChange={(event) =>
                      setMapping((current) => ({
                        ...current,
                        [header]: event.target.value,
                      }))
                    }
                    value={mapping[header] ?? "ignore"}
                  >
                    {FIELD_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
              ))}
            </div>
          </section>

          <section className="rounded border border-white/10 bg-white/[0.035] p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-cyan-200/70">
                  Preview
                </p>
                <h2 className="mt-1 text-lg font-semibold text-white">
                  First parsed rows
                </h2>
              </div>
              <button
                className="h-10 rounded bg-cyan-200 px-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
                type="submit"
              >
                Save import
              </button>
            </div>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="text-xs uppercase tracking-[0.16em] text-zinc-500">
                  <tr>
                    {parsedCsv.headers.map((header) => (
                      <th className="whitespace-nowrap border-b border-white/10 px-3 py-2" key={header}>
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-zinc-300">
                  {parsedCsv.rows.slice(0, 8).map((row, index) => (
                    <tr className="border-b border-white/5" key={index}>
                      {parsedCsv.headers.map((header) => (
                        <td className="max-w-56 truncate px-3 py-2" key={header}>
                          {row[header] || "--"}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </form>
      )}
    </div>
  );
}
