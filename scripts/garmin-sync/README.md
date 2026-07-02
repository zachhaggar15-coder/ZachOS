# Zach OS Garmin Sync

This is the optional local automation path for daily Garmin updates.

It runs on your Windows machine, logs into Garmin Connect through the
`garminconnect` Python package, stores Garmin tokens locally, then writes recent
activity and recovery data into Supabase.

Use this for automation. Keep the browser ZIP importer for one-off historical
exports.

## What It Imports

- Activities into `activities` with `source = 'garmin_connect'`
- Sleep score and sleep duration into `fitness_metrics`
- HRV into `fitness_metrics`
- Resting heart rate into `fitness_metrics`
- Training load and training status where Garmin exposes them
- Sync status into `garmin_sync_runs`

The sync is safe to rerun. Activities are upserted by
`(user_id, source, external_id)`, and fitness metrics are upserted by
`(user_id, date)` while preserving existing non-null values when Garmin does not
return a field.

## Setup

From the repo root:

```powershell
powershell -ExecutionPolicy Bypass -File scripts\garmin-sync\setup.ps1
```

If PowerShell says Python was not found, install Python 3.12+ from
<https://www.python.org/downloads/windows/> and tick **Add python.exe to PATH**.

Then edit `.env.garmin-sync`.

## First Run

Run this manually once so Garmin can ask for MFA if needed and create the local
token file:

```powershell
powershell -ExecutionPolicy Bypass -File scripts\garmin-sync\run.ps1 -Days 14
```

After that, the daily Codex automation can run the same command without asking
for a Garmin password again unless Garmin revokes or expires the refresh token.

## Useful Commands

Dry run without writing to Supabase:

```powershell
powershell -ExecutionPolicy Bypass -File scripts\garmin-sync\run.ps1 -Days 14 -DryRun
```

Force a larger backfill from Garmin Connect:

```powershell
powershell -ExecutionPolicy Bypass -File scripts\garmin-sync\run.ps1 -Days 90
```

Use a different env file:

```powershell
.\.venv-garmin\Scripts\python.exe scripts\garmin-sync\sync.py --env C:\path\to\.env.garmin-sync --days 14
```
