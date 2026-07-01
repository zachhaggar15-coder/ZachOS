"use client";

import { useRouter } from "next/navigation";
import { type FormEvent, useMemo, useState } from "react";

import { importGarminCsv } from "@/app/actions";

type ParsedCsv = {
  headers: string[];
  rows: Record<string, string>[];
};

type GarminImportToolProps = {
  latestActivityDate?: string | null;
  latestFitnessDate?: string | null;
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
const BROWSER_JSON_ENTRY_LIMIT_CHARS = 900_000;
const BROWSER_JSON_BATCH_LIMIT_CHARS = 1_600_000;
const CENTRAL_DIRECTORY_SIGNATURE = 0x02014b50;
const END_OF_CENTRAL_DIRECTORY_SIGNATURE = 0x06054b50;
const LOCAL_FILE_SIGNATURE = 0x04034b50;

type GarminZipImportResponse = {
  activitiesImported?: number;
  error?: string;
  fitnessDaysImported?: number;
  jsonFilesRead?: number;
  latestActivityDate?: string | null;
  latestFitnessDate?: string | null;
};

type GarminJsonEntry = {
  fullName: string;
  text: string;
};

function formatFileSize(bytes: number) {
  if (bytes < 1024 * 1024) {
    return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function isLocalImportHost() {
  return ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname);
}

async function readGarminZipImportResponse(response: Response) {
  const contentType = response.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    return (await response.json()) as GarminZipImportResponse;
  }

  const rawText = (await response.text()).trim();
  const responseText = rawText || `HTTP ${response.status}`;

  if (
    response.status === 413 ||
    responseText.toLowerCase().includes("request entity too large")
  ) {
    throw new Error(
      "That Garmin ZIP is too large for direct upload. Zach OS can usually import it through the browser importer instead; reload the page and try again.",
    );
  }

  throw new Error(
    `Garmin import failed before Zach OS could parse the response. Server said: ${responseText.slice(
      0,
      180,
    )}`,
  );
}

function shouldReadGarminJson(fullName: string) {
  return (
    fullName.endsWith(".json") &&
    (fullName.includes("summarizedActivities") ||
      fullName.includes("sleepData") ||
      fullName.includes("healthStatusData") ||
      fullName.includes("UDSFile_") ||
      fullName.includes("TrainingReadinessDTO") ||
      fullName.includes("TrainingHistory_") ||
      fullName.includes("MetricsAcuteTrainingLoad"))
  );
}

function findEndOfCentralDirectory(view: DataView) {
  const minimumOffset = Math.max(0, view.byteLength - 65557);

  for (let offset = view.byteLength - 22; offset >= minimumOffset; offset -= 1) {
    if (view.getUint32(offset, true) === END_OF_CENTRAL_DIRECTORY_SIGNATURE) {
      return offset;
    }
  }

  throw new Error("Could not read the Garmin ZIP directory.");
}

async function inflateZipData(data: Uint8Array) {
  const StreamCtor = globalThis.DecompressionStream as unknown as
    | (new (format: string) => TransformStream<Uint8Array, Uint8Array>)
    | undefined;

  if (!StreamCtor) {
    throw new Error(
      "This browser cannot decompress Garmin ZIP files directly. Try Chrome or Edge, then upload the same ZIP again.",
    );
  }

  const formats = ["deflate-raw", "deflate"];
  const blobPart = data.buffer.slice(
    data.byteOffset,
    data.byteOffset + data.byteLength,
  ) as ArrayBuffer;

  for (const format of formats) {
    try {
      const stream = new Blob([blobPart])
        .stream()
        .pipeThrough(new StreamCtor(format));
      return await new Response(stream).text();
    } catch {
      // Try the next browser-supported deflate variant.
    }
  }

  throw new Error("Could not decompress the Garmin ZIP entries in this browser.");
}

function splitPayloadBySize(
  fullName: string,
  rows: unknown[],
  serialise: (rows: unknown[]) => string,
) {
  const entries: GarminJsonEntry[] = [];
  let chunk: unknown[] = [];

  rows.forEach((row) => {
    chunk.push(row);
    const text = serialise(chunk);

    if (text.length > BROWSER_JSON_ENTRY_LIMIT_CHARS && chunk.length > 1) {
      const last = chunk.pop();
      entries.push({ fullName, text: serialise(chunk) });
      chunk = last === undefined ? [] : [last];
    }
  });

  if (chunk.length) {
    entries.push({ fullName, text: serialise(chunk) });
  }

  return entries;
}

function splitLargeGarminEntry(entry: GarminJsonEntry) {
  if (entry.text.length <= BROWSER_JSON_ENTRY_LIMIT_CHARS) {
    return [entry];
  }

  try {
    const payload = JSON.parse(entry.text) as unknown;

    if (Array.isArray(payload)) {
      return splitPayloadBySize(entry.fullName, payload, (rows) =>
        JSON.stringify(rows),
      );
    }

    if (payload && typeof payload === "object") {
      const record = payload as Record<string, unknown>;
      const arrayKey = Object.keys(record).find((key) =>
        Array.isArray(record[key]),
      );

      if (arrayKey && Array.isArray(record[arrayKey])) {
        return splitPayloadBySize(
          entry.fullName,
          record[arrayKey],
          (rows) => JSON.stringify({ ...record, [arrayKey]: rows }),
        );
      }
    }
  } catch {
    // Send the original entry and let the server return the parse error.
  }

  return [entry];
}

function batchGarminEntries(entries: GarminJsonEntry[]) {
  const batches: GarminJsonEntry[][] = [];
  let batch: GarminJsonEntry[] = [];
  let batchSize = 0;

  entries.forEach((entry) => {
    const entrySize = entry.fullName.length + entry.text.length;

    if (batch.length && batchSize + entrySize > BROWSER_JSON_BATCH_LIMIT_CHARS) {
      batches.push(batch);
      batch = [];
      batchSize = 0;
    }

    batch.push(entry);
    batchSize += entrySize;
  });

  if (batch.length) {
    batches.push(batch);
  }

  return batches;
}

async function readGarminZipEntriesInBrowser(
  file: File,
  onProgress: (message: string) => void,
) {
  const arrayBuffer = await file.arrayBuffer();
  const bytes = new Uint8Array(arrayBuffer);
  const view = new DataView(arrayBuffer);
  const decoder = new TextDecoder();
  const eocdOffset = findEndOfCentralDirectory(view);
  const entryCount = view.getUint16(eocdOffset + 10, true);
  let directoryOffset = view.getUint32(eocdOffset + 16, true);
  const entries: GarminJsonEntry[] = [];

  for (let index = 0; index < entryCount; index += 1) {
    if (view.getUint32(directoryOffset, true) !== CENTRAL_DIRECTORY_SIGNATURE) {
      throw new Error("The Garmin ZIP central directory is not readable.");
    }

    const compressionMethod = view.getUint16(directoryOffset + 10, true);
    const compressedSize = view.getUint32(directoryOffset + 20, true);
    const fileNameLength = view.getUint16(directoryOffset + 28, true);
    const extraLength = view.getUint16(directoryOffset + 30, true);
    const commentLength = view.getUint16(directoryOffset + 32, true);
    const localHeaderOffset = view.getUint32(directoryOffset + 42, true);
    const fullName = decoder.decode(
      bytes.subarray(directoryOffset + 46, directoryOffset + 46 + fileNameLength),
    );

    directoryOffset += 46 + fileNameLength + extraLength + commentLength;

    if (!shouldReadGarminJson(fullName)) {
      continue;
    }

    onProgress(`Extracting ${fullName.split("/").at(-1) ?? fullName}...`);

    if (view.getUint32(localHeaderOffset, true) !== LOCAL_FILE_SIGNATURE) {
      continue;
    }

    const localNameLength = view.getUint16(localHeaderOffset + 26, true);
    const localExtraLength = view.getUint16(localHeaderOffset + 28, true);
    const dataStart = localHeaderOffset + 30 + localNameLength + localExtraLength;
    const compressedData = bytes.subarray(dataStart, dataStart + compressedSize);
    const text =
      compressionMethod === 0
        ? decoder.decode(compressedData)
        : compressionMethod === 8
          ? await inflateZipData(compressedData)
          : null;

    if (text) {
      entries.push(...splitLargeGarminEntry({ fullName, text }));
    }
  }

  return entries;
}

function formatFreshness(date: string | null | undefined) {
  if (!date) {
    return "No imported data yet";
  }

  const today = new Date();
  const value = new Date(`${date}T12:00:00Z`);
  const days = Math.max(
    0,
    Math.round((today.getTime() - value.getTime()) / (24 * 60 * 60 * 1000)),
  );

  if (days === 0) {
    return `${date} - up to date`;
  }

  if (days <= 7) {
    return `${date} - ${days} day${days === 1 ? "" : "s"} old`;
  }

  return `${date} - refresh recommended`;
}

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

export function GarminImportTool({
  latestActivityDate,
  latestFitnessDate,
}: GarminImportToolProps) {
  const [parsedCsv, setParsedCsv] = useState<ParsedCsv | null>(null);
  const [mapping, setMapping] = useState<Record<string, string>>({});
  const [fileName, setFileName] = useState("");
  const [parseError, setParseError] = useState("");
  const [zipImportError, setZipImportError] = useState("");
  const [zipImportProgress, setZipImportProgress] = useState("");
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
    setZipImportProgress("");
    setZipImportResult("");

    setZipImporting(true);

    try {
      if (!isLocalImportHost()) {
        setZipImportProgress(
          `Preparing Garmin ZIP (${formatFileSize(
            file.size,
          )}). Extracting Garmin JSON in the browser so Vercel never receives the full ZIP upload...`,
        );
        const entries = await readGarminZipEntriesInBrowser(
          file,
          setZipImportProgress,
        );

        if (!entries.length) {
          throw new Error(
            "No usable Garmin JSON files were found in that ZIP export.",
          );
        }

        const batches = batchGarminEntries(entries);
        const totals: Required<
          Pick<
            GarminZipImportResponse,
            "activitiesImported" | "fitnessDaysImported" | "jsonFilesRead"
          >
        > & {
          latestActivityDate: string | null;
          latestFitnessDate: string | null;
        } = {
          activitiesImported: 0,
          fitnessDaysImported: 0,
          jsonFilesRead: 0,
          latestActivityDate: null,
          latestFitnessDate: null,
        };

        for (let index = 0; index < batches.length; index += 1) {
          setZipImportProgress(
            `Saving Garmin batch ${index + 1} of ${batches.length}...`,
          );
          const response = await fetch("/api/garmin-export/import-json", {
            body: JSON.stringify({ entries: batches[index] }),
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
          });
          const payload = await readGarminZipImportResponse(response);

          if (!response.ok) {
            throw new Error(payload.error || "Garmin export import failed.");
          }

          totals.activitiesImported += payload.activitiesImported ?? 0;
          totals.fitnessDaysImported += payload.fitnessDaysImported ?? 0;
          totals.jsonFilesRead += payload.jsonFilesRead ?? 0;
          totals.latestActivityDate =
            [totals.latestActivityDate, payload.latestActivityDate]
              .filter((date): date is string => Boolean(date))
              .sort((a, b) => a.localeCompare(b))
              .at(-1) ?? null;
          totals.latestFitnessDate =
            [totals.latestFitnessDate, payload.latestFitnessDate]
              .filter((date): date is string => Boolean(date))
              .sort((a, b) => a.localeCompare(b))
              .at(-1) ?? null;
        }

        setZipImportResult(
          `Imported ${totals.activitiesImported} activities and ${
            totals.fitnessDaysImported
          } fitness metric days from ${
            totals.jsonFilesRead
          } Garmin JSON chunks. Latest activity: ${
            totals.latestActivityDate ?? "none"
          }. Latest fitness day: ${totals.latestFitnessDate ?? "none"}.`,
        );
        setZipImportProgress("");
        form.reset();
        router.refresh();
        return;
      }

      const response = await fetch("/api/garmin-export/import", {
        body: file,
        headers: {
          "Content-Type": file.type || "application/zip",
        },
        method: "POST",
      });
      const payload = await readGarminZipImportResponse(response);

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
      setZipImportProgress("");
      form.reset();
      router.refresh();
    } catch (error) {
      setZipImportProgress("");
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
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-cyan-200/70">
              Recommended Garmin path
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white">
              One-upload Garmin history import
            </h1>
          </div>
          <div className="grid gap-2 rounded border border-white/10 bg-black/20 p-3 text-xs text-zinc-400">
            <div>
              <span className="text-zinc-500">Latest activity: </span>
              <span className="text-zinc-200">
                {formatFreshness(latestActivityDate)}
              </span>
            </div>
            <div>
              <span className="text-zinc-500">Latest recovery day: </span>
              <span className="text-zinc-200">
                {formatFreshness(latestFitnessDate)}
              </span>
            </div>
          </div>
        </div>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-400">
          Upload the original Garmin account export ZIP. Zach OS will import
          historical activity summaries, sleep scores, HRV, resting HR,
          training status and acute training load where those files exist. No
          column mapping is needed for this route.
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
          Large Garmin exports are imported in your browser first, then saved in
          smaller batches so the deployed app does not hit upload-size limits.
          The import is safe to rerun because rows are upserted by date or
          Garmin activity ID.
        </p>
        <p className="mt-2 text-xs leading-5 text-zinc-500">
          Keep this tab open while the import is running. If the latest dates
          above are stale, request a fresh Garmin export and upload the new ZIP.
        </p>
        <p className="mt-2 text-xs leading-5 text-zinc-600">
          Zach OS does not store your Garmin password or automate Garmin Connect
          login; the upload uses files you have exported yourself.
        </p>
        {zipImportResult && (
          <p className="mt-3 rounded border border-emerald-300/25 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-100">
            {zipImportResult}
          </p>
        )}
        {zipImportProgress && (
          <p className="mt-3 rounded border border-cyan-300/25 bg-cyan-400/10 px-3 py-2 text-sm text-cyan-100">
            {zipImportProgress}
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
          Zach OS fields, then save. Use this only when the full account export
          ZIP does not contain the Garmin-specific file you need.
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
