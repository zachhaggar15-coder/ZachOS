import "server-only";

import { inflateRawSync } from "node:zlib";

import type { Database } from "@/lib/supabase/database.types";

type ActivityInsert = Database["public"]["Tables"]["activities"]["Insert"];
type FitnessMetricInsert =
  Database["public"]["Tables"]["fitness_metrics"]["Insert"];

type GarminExportResult = {
  activities: ActivityInsert[];
  fitnessMetrics: FitnessMetricInsert[];
  jsonFilesRead: number;
  skippedFiles: number;
};

export type GarminExportJsonEntry = {
  fullName: string;
  text: string;
};

type JsonRecord = Record<string, unknown>;

const CENTRAL_DIRECTORY_SIGNATURE = 0x02014b50;
const END_OF_CENTRAL_DIRECTORY_SIGNATURE = 0x06054b50;
const LOCAL_FILE_SIGNATURE = 0x04034b50;

function isRecord(value: unknown): value is JsonRecord {
  return !!value && typeof value === "object" && !Array.isArray(value);
}

function text(value: unknown) {
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

function numeric(value: unknown) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === "string" && value.trim()) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }

  return null;
}

function round(value: number, digits = 2) {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

function dateFromValue(value: unknown) {
  if (typeof value === "string") {
    const dateOnly = value.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (dateOnly) {
      return `${dateOnly[1]}-${dateOnly[2]}-${dateOnly[3]}`;
    }

    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime())
      ? null
      : parsed.toISOString().slice(0, 10);
  }

  const epoch = numeric(value);
  if (epoch === null) {
    return null;
  }

  const parsed = new Date(epoch);
  return Number.isNaN(parsed.getTime())
    ? null
    : parsed.toISOString().slice(0, 10);
}

function dateFromActivity(row: JsonRecord) {
  return (
    dateFromValue(row.startTimeLocal) ??
    dateFromValue(row.startTimeGmt) ??
    dateFromValue(row.beginTimestamp)
  );
}

function normaliseDurationMinutes(value: unknown) {
  const duration = numeric(value);
  if (duration === null) {
    return null;
  }

  if (duration > 10000) {
    return round(duration / 60000, 2);
  }

  if (duration > 300) {
    return round(duration / 60, 2);
  }

  return round(duration, 2);
}

function normaliseDistanceKm(value: unknown) {
  const distance = numeric(value);
  return distance === null ? null : round(distance / 100000, 3);
}

function normaliseGarminEnergyToCalories(value: unknown) {
  const energy = numeric(value);
  return energy === null ? null : Math.round(energy / 4.184);
}

function secondsToHours(...values: unknown[]) {
  const seconds = values.reduce<number>(
    (total, value) => total + (numeric(value) ?? 0),
    0,
  );
  return seconds > 0 ? round(seconds / 3600, 2) : null;
}

function findEndOfCentralDirectory(buffer: Buffer) {
  const minimumOffset = Math.max(0, buffer.length - 65557);

  for (let offset = buffer.length - 22; offset >= minimumOffset; offset -= 1) {
    if (buffer.readUInt32LE(offset) === END_OF_CENTRAL_DIRECTORY_SIGNATURE) {
      return offset;
    }
  }

  throw new Error("Could not read the Garmin ZIP directory.");
}

export function shouldReadGarminJson(fullName: string) {
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

function readRelevantZipJsonEntries(buffer: Buffer) {
  const eocdOffset = findEndOfCentralDirectory(buffer);
  const entryCount = buffer.readUInt16LE(eocdOffset + 10);
  let directoryOffset = buffer.readUInt32LE(eocdOffset + 16);
  const entries: { fullName: string; text: string }[] = [];
  let skippedFiles = 0;

  for (let index = 0; index < entryCount; index += 1) {
    if (buffer.readUInt32LE(directoryOffset) !== CENTRAL_DIRECTORY_SIGNATURE) {
      throw new Error("The Garmin ZIP central directory is not readable.");
    }

    const compressionMethod = buffer.readUInt16LE(directoryOffset + 10);
    const compressedSize = buffer.readUInt32LE(directoryOffset + 20);
    const fileNameLength = buffer.readUInt16LE(directoryOffset + 28);
    const extraLength = buffer.readUInt16LE(directoryOffset + 30);
    const commentLength = buffer.readUInt16LE(directoryOffset + 32);
    const localHeaderOffset = buffer.readUInt32LE(directoryOffset + 42);
    const fullName = buffer
      .subarray(directoryOffset + 46, directoryOffset + 46 + fileNameLength)
      .toString("utf8");

    directoryOffset += 46 + fileNameLength + extraLength + commentLength;

    if (!shouldReadGarminJson(fullName)) {
      skippedFiles += 1;
      continue;
    }

    if (buffer.readUInt32LE(localHeaderOffset) !== LOCAL_FILE_SIGNATURE) {
      skippedFiles += 1;
      continue;
    }

    const localNameLength = buffer.readUInt16LE(localHeaderOffset + 26);
    const localExtraLength = buffer.readUInt16LE(localHeaderOffset + 28);
    const dataStart = localHeaderOffset + 30 + localNameLength + localExtraLength;
    const compressedData = buffer.subarray(dataStart, dataStart + compressedSize);
    const data =
      compressionMethod === 0
        ? compressedData
        : compressionMethod === 8
          ? inflateRawSync(compressedData)
          : null;

    if (!data) {
      skippedFiles += 1;
      continue;
    }

    entries.push({ fullName, text: data.toString("utf8") });
  }

  return { entries, skippedFiles };
}

function upsertFitness(
  byDate: Map<string, FitnessMetricInsert>,
  userId: string,
  date: string | null,
) {
  if (!date) {
    return null;
  }

  const existing = byDate.get(date);
  if (existing) {
    return existing;
  }

  const row: FitnessMetricInsert = { date, user_id: userId };
  byDate.set(date, row);
  return row;
}

function setNumber<K extends keyof FitnessMetricInsert>(
  row: FitnessMetricInsert,
  key: K,
  value: number | null,
  overwrite = false,
) {
  if (value === null) {
    return;
  }

  if (overwrite || row[key] === undefined || row[key] === null) {
    row[key] = value as FitnessMetricInsert[K];
  }
}

function setString<K extends keyof FitnessMetricInsert>(
  row: FitnessMetricInsert,
  key: K,
  value: string | null,
  overwrite = false,
) {
  if (!value) {
    return;
  }

  if (overwrite || row[key] === undefined || row[key] === null) {
    row[key] = value as FitnessMetricInsert[K];
  }
}

function arrayPayload(payload: unknown, key?: string) {
  if (Array.isArray(payload)) {
    return payload.filter(isRecord);
  }

  if (key && isRecord(payload) && Array.isArray(payload[key])) {
    return (payload[key] as unknown[]).filter(isRecord);
  }

  return [];
}

function activityPayloadRows(payload: unknown) {
  return arrayPayload(payload, "summarizedActivitiesExport").flatMap((row) => {
    if (Array.isArray(row.summarizedActivitiesExport)) {
      return row.summarizedActivitiesExport.filter(isRecord);
    }

    return [row];
  });
}

function parseActivities(payload: unknown, userId: string) {
  return activityPayloadRows(payload)
    .map((row): ActivityInsert | null => {
      const date = dateFromActivity(row);
      if (!date) {
        return null;
      }

      const externalId = text(row.activityId) ?? String(numeric(row.activityId) ?? "");
      if (!externalId) {
        return null;
      }

      const aerobic = numeric(row.aerobicTrainingEffect);
      const anaerobic = numeric(row.anaerobicTrainingEffect);
      const label = text(row.trainingEffectLabel);
      const fallbackTrainingEffect = [
        aerobic !== null ? `Aerobic ${round(aerobic, 1)}` : null,
        anaerobic !== null ? `Anaerobic ${round(anaerobic, 1)}` : null,
      ]
        .filter(Boolean)
        .join(", ");
      const trainingEffect = label ?? (fallbackTrainingEffect || null);

      return {
        activity_type: text(row.activityType) ?? text(row.sportType),
        avg_hr: numeric(row.avgHr),
        calories: normaliseGarminEnergyToCalories(row.calories),
        date,
        distance_km: normaliseDistanceKm(row.distance),
        duration_minutes: normaliseDurationMinutes(row.duration),
        external_id: externalId,
        max_hr: numeric(row.maxHr),
        notes: text(row.name),
        source: "garmin_export",
        synced_at: new Date().toISOString(),
        training_effect: trainingEffect,
        user_id: userId,
      };
    })
    .filter((row): row is ActivityInsert => row !== null);
}

function parseSleepData(
  payload: unknown,
  userId: string,
  fitnessByDate: Map<string, FitnessMetricInsert>,
) {
  arrayPayload(payload).forEach((source) => {
    const row = upsertFitness(fitnessByDate, userId, dateFromValue(source.calendarDate));
    if (!row) {
      return;
    }

    if (isRecord(source.sleepScores)) {
      setNumber(row, "sleep_score", numeric(source.sleepScores.overallScore));
    }

    setNumber(
      row,
      "sleep_hours",
      secondsToHours(
        source.deepSleepSeconds,
        source.lightSleepSeconds,
        source.remSleepSeconds,
      ),
    );
  });
}

function parseHealthStatus(
  payload: unknown,
  userId: string,
  fitnessByDate: Map<string, FitnessMetricInsert>,
) {
  arrayPayload(payload).forEach((source) => {
    const row = upsertFitness(fitnessByDate, userId, dateFromValue(source.calendarDate));
    if (!row || !Array.isArray(source.metrics)) {
      return;
    }

    source.metrics.filter(isRecord).forEach((metric) => {
      const type = text(metric.type);
      if (type === "HRV") {
        setNumber(row, "hrv", numeric(metric.value), true);
      }
      if (type === "HR") {
        setNumber(row, "resting_hr", numeric(metric.value), true);
      }
    });
  });
}

function parseUdsData(
  payload: unknown,
  userId: string,
  fitnessByDate: Map<string, FitnessMetricInsert>,
) {
  arrayPayload(payload).forEach((source) => {
    const row = upsertFitness(fitnessByDate, userId, dateFromValue(source.calendarDate));
    if (!row) {
      return;
    }

    setNumber(
      row,
      "resting_hr",
      numeric(source.currentDayRestingHeartRate) ?? numeric(source.restingHeartRate),
    );
  });
}

function parseTrainingReadiness(
  payload: unknown,
  userId: string,
  fitnessByDate: Map<string, FitnessMetricInsert>,
) {
  arrayPayload(payload).forEach((source) => {
    const row = upsertFitness(fitnessByDate, userId, dateFromValue(source.calendarDate));
    if (!row) {
      return;
    }

    setNumber(row, "sleep_score", numeric(source.sleepScore));
    setNumber(row, "training_load", numeric(source.acuteLoad));
    setString(row, "training_status", text(source.level));
  });
}

function parseTrainingHistory(
  payload: unknown,
  userId: string,
  fitnessByDate: Map<string, FitnessMetricInsert>,
) {
  arrayPayload(payload).forEach((source) => {
    const row = upsertFitness(fitnessByDate, userId, dateFromValue(source.calendarDate));
    if (!row) {
      return;
    }

    setString(row, "training_status", text(source.trainingStatus), true);
  });
}

function parseAcuteTrainingLoad(
  payload: unknown,
  userId: string,
  fitnessByDate: Map<string, FitnessMetricInsert>,
) {
  arrayPayload(payload).forEach((source) => {
    const row = upsertFitness(fitnessByDate, userId, dateFromValue(source.calendarDate));
    if (!row) {
      return;
    }

    setNumber(row, "training_load", numeric(source.dailyTrainingLoadAcute), true);
  });
}

export function parseGarminExportZip(
  arrayBuffer: ArrayBuffer,
  userId: string,
): GarminExportResult {
  const buffer = Buffer.from(arrayBuffer);
  const { entries, skippedFiles } = readRelevantZipJsonEntries(buffer);
  return parseGarminExportJsonEntries(entries, userId, skippedFiles);
}

export function parseGarminExportJsonEntries(
  entries: GarminExportJsonEntry[],
  userId: string,
  skippedFiles = 0,
): GarminExportResult {
  const activitiesByExternalId = new Map<string, ActivityInsert>();
  const fitnessByDate = new Map<string, FitnessMetricInsert>();

  entries.forEach((entry) => {
    const payload: unknown = JSON.parse(entry.text);

    if (entry.fullName.includes("summarizedActivities")) {
      parseActivities(payload, userId).forEach((activity) => {
        if (activity.external_id) {
          activitiesByExternalId.set(activity.external_id, activity);
        }
      });
      return;
    }

    if (entry.fullName.includes("sleepData")) {
      parseSleepData(payload, userId, fitnessByDate);
      return;
    }

    if (entry.fullName.includes("healthStatusData")) {
      parseHealthStatus(payload, userId, fitnessByDate);
      return;
    }

    if (entry.fullName.includes("UDSFile_")) {
      parseUdsData(payload, userId, fitnessByDate);
      return;
    }

    if (entry.fullName.includes("TrainingReadinessDTO")) {
      parseTrainingReadiness(payload, userId, fitnessByDate);
      return;
    }

    if (entry.fullName.includes("TrainingHistory_")) {
      parseTrainingHistory(payload, userId, fitnessByDate);
      return;
    }

    if (entry.fullName.includes("MetricsAcuteTrainingLoad")) {
      parseAcuteTrainingLoad(payload, userId, fitnessByDate);
    }
  });

  return {
    activities: Array.from(activitiesByExternalId.values()),
    fitnessMetrics: Array.from(fitnessByDate.values()),
    jsonFilesRead: entries.length,
    skippedFiles,
  };
}
