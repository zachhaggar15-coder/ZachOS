# Zach OS Garmin Sync

This is the optional local automation path for daily Garmin updates.

It runs on your Windows machine, creates Garmin tokens through your normal
Chrome/Edge browser, stores those tokens locally, then writes recent activity
and recovery data into Supabase. It does not store your Garmin password.

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

`SUPABASE_URL` must be your real Supabase Project URL from **Project Settings >
API**. It should look like `https://abc123.supabase.co`; do not use the Supabase
dashboard URL and do not leave the `your-real-project-ref` placeholder in place.

`SUPABASE_SERVICE_ROLE_KEY` must be the service-role key from the same Supabase
API settings page. Keep it private and do not put it in Vercel or GitHub unless
you intentionally need a server-only secret there.

## First Run

Run this manually once so Garmin can open your normal browser and create the
local token file:

```powershell
powershell -ExecutionPolicy Bypass -File scripts\garmin-sync\login.ps1
```

Log in to Garmin in your normal browser. Zach OS starts a temporary local
callback on `127.0.0.1`, captures Garmin's login ticket, and saves
`.garmin-tokens/garmin_tokens.json`.

If Garmin still blocks the page, close the old blocked browser tab, wait a few
minutes, then run the command again. If Garmin logs you in but does not redirect
back to the terminal, use the manual fallback:

```powershell
powershell -ExecutionPolicy Bypass -File scripts\garmin-sync\login.ps1 -Manual
```

Then run the sync:

```powershell
powershell -ExecutionPolicy Bypass -File scripts\garmin-sync\run.ps1 -Days 14
```

After that, the daily Codex automation can run the same sync command without
touching Garmin's blocked SSO login unless Garmin revokes or expires the refresh
token. If you see a Garmin `429` error, rerun `login.ps1` and then rerun
`run.ps1`.

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
