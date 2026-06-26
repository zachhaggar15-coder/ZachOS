# Zach OS

Zach OS is a private personal life dashboard built with Next.js App Router, TypeScript, Tailwind, Supabase Auth, Supabase Postgres, Recharts and optional OpenAI API insights.

It tracks fitness, finance and intellectual habits with a dark analytics dashboard plus a restrained RPG-style character sheet.

## Features

- Supabase email/password login, signup and logout.
- Server-rendered private dashboard after login.
- One-screen control-room dashboard at `/`, with detailed forms moved to `/manage`.
- Quick daily check-in on `/manage` for habits, sleep score, recovery metrics and writing practice in one form.
- Manual add/update forms for daily logs, fitness metrics, finance snapshots and quests.
- One-click import for the historical net worth snapshot from February 2024 to June 2026.
- Strava OAuth automatic activity import at `/integrations`.
- Manual Garmin account-export ZIP import at `/garmin-import`.
- Manual Garmin CSV import with preview and column mapping.
- Imported activity data saved into `activities`; mapped health metrics saved into `fitness_metrics`.
- Clickable dashboard graphs that open table drilldowns under `/charts/...`.
- Portfolio module at `/portfolio` with editable ISA/LISA holdings, daily price refresh and weekly gain/loss.
- Supabase Row Level Security policies for every user-owned table.
- Charts for mood, sleep score, HRV, net worth, average HR, weekly running distance, monthly running distance, sleep score versus mood and HRV versus training load.
- XP, levels, character attributes and achievement badges.
- Active quest board with progress bars and a next suggested action.
- AI Insights page for optional daily and weekly summaries.
- Dashboard card: **Today's move** with a practical next action, bottleneck and consultant rep.
- Simple analytics: 7-day averages, 30-day averages, trend direction, best mood day and relationship checks.
- Consultant Mode for Veeva readiness practice.

## AI Insights

AI is optional and controlled by:

```bash
OPENAI_API_KEY=your-openai-api-key
OPENAI_MODEL=gpt-5.5
```

If `OPENAI_API_KEY` is missing, Zach OS still works normally and returns a local fallback briefing based only on stored dashboard data.

The AI prompt is intentionally constrained:

- Use only stored Zach OS dashboard data.
- Do not make medical claims.
- Give cautious, practical observations.
- Say when data is missing or unclear.

Daily summaries include:

- Current state
- Today's move
- Main bottleneck
- Training recommendation
- Recovery recommendation
- Intellectual habit recommendation
- Consultant readiness recommendation
- One sentence strategic summary

Weekly reports include:

- Fitness trend
- Recovery trend
- Intellectual habits trend
- Finance trend
- Strongest week-over-week improvement
- Weakest area
- Suggested focus for next week

The local fallback also compares the latest 7-day period with the previous
7-day period where enough data exists, so the app remains useful without
`OPENAI_API_KEY`.

## Garmin Import

Garmin remains intentionally manual and safe. Use it for Garmin-specific health
and recovery metrics such as sleep score, HRV, resting HR, training status and
training load.

For a full historical import:

- Request/export your Garmin account data from Garmin.
- Upload the original ZIP at `/garmin-import`.
- Zach OS imports activity summaries, sleep scores, sleep duration, HRV, resting HR, training status and acute training load where those JSON files exist.
- Re-running the same ZIP is safe; activities are upserted by Garmin activity ID and fitness metrics by date.
- After large historical imports, the dashboard loads the newest rows first and then sorts them for charts, so old archive rows do not hide recent data.

For smaller/manual imports:

- Export CSV data from Garmin yourself.
- Upload the CSV in Zach OS.
- Preview parsed rows.
- Map CSV columns to Zach OS fields.
- Save the import.

This app does **not** use unofficial Garmin credentials, does **not** scrape Garmin Connect login, and does **not** store Garmin account credentials.

Supported import fields:

- Activity fields: `date`, `activity_type`, `distance_km`, `duration_minutes`, `avg_hr`, `max_hr`, `calories`, `training_effect`, `notes`
- Fitness metric fields: `sleep_score`, `hrv`, `resting_hr`, `training_load`
- Garmin-only or legacy import fields retained for compatibility: `sleep_hours`, `weekly_distance_km`, `training_status`

Distance columns with mile-style headers are converted to kilometres during import.

Large Garmin account exports are best imported while running Zach OS locally
with `npm run dev`; hosted platforms can reject large ZIP uploads before the
app sees them.

## Strava OAuth

Strava is the first automatic integration because Garmin Health API access is
not reliably available for hobbyist projects.

Create a Strava API application, then add these environment variables:

```bash
STRAVA_CLIENT_ID=your-strava-client-id
STRAVA_CLIENT_SECRET=your-strava-client-secret
STRAVA_REDIRECT_URI=http://localhost:3000/api/strava/callback
```

For Vercel, set `STRAVA_REDIRECT_URI` to:

```bash
https://your-vercel-domain.vercel.app/api/strava/callback
```

The Strava app callback domain must match the deployed domain. After connecting
Strava at `/integrations`, use **Sync activities** to import recent activities
into the `activities` table with `source = 'strava'`.

## Portfolio Module

Open `/portfolio` after logging in.

The default seed button adds:

- Stocks & Shares ISA, Trading212
  - `WEXU`, 395 units
  - `VUAG`, 29 units
- Lifetime ISA, OneFamily
  - `Amundi Prime All Country World UCITS ETF Acc GBP`, 1000 units

Holdings can be edited from the UI and new accounts or holdings can be added later.

Market prices are optional. Add one or both keys:

```bash
FMP_API_KEY=your-financial-modeling-prep-key
ALPHA_VANTAGE_API_KEY=your-alpha-vantage-key
```

Zach OS tries Financial Modeling Prep first, then Alpha Vantage. Prices are refreshed at most once per day while signed in, and there is also a manual **Refresh prices** button on `/portfolio`. If no market API key is set, portfolio editing still works and any manual prices you enter are kept.

The dashboard displays:

- Total invested
- ISA value
- LISA value
- Weekly gain/loss from `net_worth_snapshots`

## Local Setup

Install dependencies:

```bash
npm install
```

Create a `.env.local` file:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
OPENAI_API_KEY=
OPENAI_MODEL=gpt-5.5
STRAVA_CLIENT_ID=
STRAVA_CLIENT_SECRET=
STRAVA_REDIRECT_URI=http://localhost:3000/api/strava/callback
FMP_API_KEY=
ALPHA_VANTAGE_API_KEY=
```

Run locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Supabase Setup

1. Create a Supabase project.
2. In Supabase, go to **Authentication > Providers** and enable Email.
3. Copy the project URL and anon key into `.env.local`.
4. For a fresh database, run [`supabase/schema.sql`](./supabase/schema.sql) in the Supabase SQL Editor.
5. For an existing Zach OS database, run the migration files in [`supabase/migrations`](./supabase/migrations), including `20260623_add_sleep_score_simplify_manual_input.sql`, `20260623_add_garmin_training_load.sql`, `20260623_add_portfolio_module.sql` and `20260626_add_daily_routine_logs.sql`.
6. Start the app, create an account, then log in.

## Database Schema

The schema creates these tables:

- `daily_logs`
  - `id uuid primary key`
  - `user_id uuid references auth.users(id)`
  - `date date`
  - `mood_score integer 1-10`
  - `deep_work_hours numeric`
  - `french_minutes integer`
  - `reading_pages integer`
  - `notes text`
  - `created_at timestamptz`

- `daily_routine_logs`
  - `id uuid primary key`
  - `user_id uuid references auth.users(id)`
  - `date date`
  - `routine_key text`
  - `completed boolean`
  - `created_at timestamptz`
  - `updated_at timestamptz`

- `fitness_metrics`
  - `id uuid primary key`
  - `user_id uuid references auth.users(id)`
  - `date date`
  - `sleep_score numeric`
  - `sleep_hours numeric` retained for legacy/import compatibility
  - `hrv numeric`
  - `resting_hr numeric`
  - `training_load numeric`
  - `weekly_distance_km numeric` retained for Garmin/import compatibility
  - `training_status text` retained for Garmin/import compatibility
  - `created_at timestamptz`

- `finance_snapshots`
  - `id uuid primary key`
  - `user_id uuid references auth.users(id)`
  - `date date`
  - `cash_gbp numeric`
  - `isa_gbp numeric`
  - `lifetime_isa_gbp numeric`
  - `invested_gbp numeric`
  - `net_worth_gbp numeric`
  - `net_worth_change_percent numeric`
  - `created_at timestamptz`

- `activities`
  - `id uuid primary key`
  - `user_id uuid references auth.users(id)`
  - `date date`
  - `activity_type text`
  - `distance_km numeric`
  - `duration_minutes numeric`
  - `avg_hr numeric`
  - `max_hr numeric`
  - `calories numeric`
  - `training_effect text`
  - `notes text`
  - `source text`
  - `external_id text`
  - `synced_at timestamptz`
  - `created_at timestamptz`

- `strava_connections`
  - `id uuid primary key`
  - `user_id uuid references auth.users(id)`
  - `athlete_id bigint`
  - `athlete_name text`
  - `scope text`
  - `access_token text`
  - `refresh_token text`
  - `expires_at bigint`
  - `last_sync_at timestamptz`
  - `created_at timestamptz`
  - `updated_at timestamptz`

- `quests`
  - `id uuid primary key`
  - `user_id uuid references auth.users(id)`
  - `title text`
  - `category text`
  - `target_metric text`
  - `target_value numeric`
  - `current_value numeric`
  - `deadline date`
  - `status text`
  - `created_at timestamptz`

- `consultant_readiness_logs`
  - `id uuid primary key`
  - `user_id uuid references auth.users(id)`
  - `date date`
  - `writing_minutes integer`
  - `structured_thinking_reps integer` retained for legacy compatibility
  - `industry_learning_minutes integer` retained for legacy compatibility
  - `communication_practice_minutes integer` retained for legacy compatibility
  - `notes text` retained for legacy compatibility
  - `created_at timestamptz`

- `portfolio_accounts`
  - `id uuid primary key`
  - `user_id uuid references auth.users(id)`
  - `name text`
  - `type text` (`ISA`, `LISA`, `Cash`, `Pension`)
  - `provider text`
  - `created_at timestamptz`

- `portfolio_holdings`
  - `id uuid primary key`
  - `account_id uuid references portfolio_accounts(id)`
  - `ticker text`
  - `fund_name text`
  - `exchange text`
  - `units numeric`
  - `currency text`
  - `auto_price_updates boolean`
  - `created_at timestamptz`

- `market_prices`
  - `ticker text primary key`
  - `price numeric`
  - `currency text`
  - `updated_at timestamptz`

- `net_worth_snapshots`
  - `id uuid primary key`
  - `user_id uuid references auth.users(id)`
  - `date date`
  - `estimated_net_worth numeric`
  - `invested_value numeric`
  - `cash_value numeric`
  - `created_at timestamptz`

`daily_logs`, `fitness_metrics`, `finance_snapshots` and `consultant_readiness_logs` use unique `(user_id, date)` constraints so forms can upsert one daily value per user. `daily_routine_logs` uses unique `(user_id, date, routine_key)` rows so each dashboard ritual can be toggled once per day and feed the ritual consistency graph.

## Row Level Security

RLS is enabled for all user-owned tables:

- `daily_logs`
- `daily_routine_logs`
- `fitness_metrics`
- `finance_snapshots`
- `activities`
- `strava_connections`
- `quests`
- `consultant_readiness_logs`
- `portfolio_accounts`
- `portfolio_holdings`
- `net_worth_snapshots`

Policies allow authenticated users to select, insert, update and delete only rows where:

```sql
auth.uid() = user_id
```

`portfolio_holdings` is protected through its parent `portfolio_accounts` ownership. `market_prices` is a shared lookup table; authenticated users can read and update prices, while private portfolio values remain user-owned.

The app also re-checks the authenticated Supabase user inside every server action before writing data.

## Simple Analytics

The AI Insights page and dashboard quick-read calculate:

- 7-day averages.
- 30-day averages.
- Trend direction versus the previous 7-day period.
- Best day of week for mood.
- Relationship between sleep score and mood.
- Relationship between deep work and mood.
- Relationship between training volume and HRV.

## XP And Character Sheet

XP rules:

- Running: +10 XP per km.
- Deep work: +50 XP per hour.
- French: +1 XP per minute.
- Reading: +2 XP per page.
- Sleep score: +20 XP if sleep score is at least 70.
- Recovery bonus: +50 XP if HRV is above the recent 7-day average.

Levels use 1,000 XP per level.

Attributes:

- Endurance from running volume.
- Recovery from sleep score and HRV.
- Discipline from repeated daily logs and deep work.
- Knowledge from French and reading.
- Wealth from net worth snapshots.

Achievements:

- First Log
- 7-Day Streak
- 30-Day Streak
- 50km Running Month
- 100km Running Month
- 10 Hours Deep Work
- 500 French Minutes
- 500 Reading Pages
- £10k Invested
- £50k Net Worth
- £100k Net Worth

## Quests

Quests are created manually from the dashboard.

Fields:

- `title`
- `category`
- `target_metric`
- `target_value`
- `current_value`
- `deadline`
- `status`

Example quests:

- Run Wales
- Become Consultant Ready
- Reach £100k Invested
- Become Conversational in French

The dashboard shows active quests, progress bars and a next suggested action based on the active quest with the lowest progress.

## Historical Net Worth Import

The management page includes an import button for the provided net worth
snapshot. It imports ISA, Lifetime ISA, total net worth and percent change into
`finance_snapshots`.

Use:

1. Run the finance migration if your Supabase schema already exists.
2. Open `/manage`.
3. Click **Import 31 net worth rows**.

The import is safe to rerun because rows are upserted by `(user_id, date)`.

## Consultant Mode

Consultant Mode helps prepare for starting at Veeva.

It tracks:

- Deep work hours from daily logs.
- Reading pages from daily logs.
- Writing practice minutes.

Consultant readiness score is calculated from the last 30 days of:

- Deep work hours.
- Reading pages.
- Writing minutes.

The dashboard also shows one practical daily consultant-readiness recommendation, such as writing an executive-style clinical trial summary or turning reading into client-facing implications.

## Deploy On Vercel

1. Push this repo to GitHub.
2. Import the project into Vercel.
3. Add these Vercel environment variables:

```bash
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
OPENAI_API_KEY
OPENAI_MODEL
STRAVA_CLIENT_ID
STRAVA_CLIENT_SECRET
STRAVA_REDIRECT_URI
FMP_API_KEY
ALPHA_VANTAGE_API_KEY
```

`OPENAI_API_KEY`, `FMP_API_KEY` and `ALPHA_VANTAGE_API_KEY` are optional. Do not add them if you do not want AI summaries or automatic market prices enabled.

4. Deploy.
5. In Supabase Auth settings, add your Vercel domain to the allowed redirect/site URLs if you enable email confirmation links.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```
