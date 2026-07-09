# Zach OS

Zach OS is a private personal life dashboard built with Next.js App Router, TypeScript, Tailwind, Supabase Auth, Supabase Postgres, Recharts and optional OpenAI API insights.

It tracks fitness, finance and intellectual habits with a dark analytics dashboard plus a restrained RPG-style character sheet.

## Features

- Supabase email/password login, signup, password setup/recovery and logout.
- Server-rendered private dashboard after login.
- One-screen control-room dashboard at `/`, with detailed forms moved to `/manage`.
- Quick daily check-in on `/manage` for habits, sleep score, recovery metrics and writing practice in one form.
- Manual add/update forms for daily logs, fitness metrics and finance snapshots.
- Auto-derived quest progress from Garmin/Strava activities, daily logs, consultant logs and finance snapshots, with manual quest values only as fallback.
- One-click import for the historical net worth snapshot from February 2024 to June 2026.
- Strava OAuth automatic activity import at `/integrations`.
- One-upload Garmin account-export ZIP import at `/garmin-import`.
- Optional local Garmin Connect daily sync using the `garminconnect` Python package.
- Manual Garmin CSV import with preview and column mapping.
- Imported activity data saved into `activities`; mapped health metrics saved into `fitness_metrics`.
- Clickable dashboard sections for mood, running, recovery, HRV and activities,
  with `/charts/...` retained as table drilldowns.
- Portfolio module at `/portfolio` with editable ISA/LISA holdings, Monday/Thursday price refresh and weekly gain/loss.
- Supabase Row Level Security policies for every user-owned table.
- Charts for mood, sleep score, HRV, net worth, average HR, weekly running distance, monthly running distance, sleep score versus mood and HRV versus training load.
- XP, levels, character attributes and achievement badges.
- Active quest board with progress bars and a next suggested action.
- AI Insights page for optional daily and weekly summaries, plus stored weekly
  running coach insights on `/running`.
- Learning Zone at `/learning-zone` with a topic spin wheel, source-backed
  3-5 minute lessons, multiple-choice recall checks and a cumulative intellect
  score split into Knowledge, Reasoning, Application, Breadth and Retention.
- Dashboard card: **Today's move** with a practical next action, bottleneck and consultant rep.
- Running detail pages with weekly distance, monthly distance, average HR trend,
  pace-band HR comparison, recent run rows and clickable run dossiers.
- Simple analytics: 7-day averages, 30-day averages, trend direction, best mood day and relationship checks.
- Consultant Mode for Veeva readiness practice.

## AI Insights

AI is optional and controlled by:

```bash
OPENAI_API_KEY=your-openai-api-key
OPENAI_MODEL=gpt-4o
```

If `OPENAI_API_KEY` is missing, Zach OS still works normally and returns a local fallback briefing based only on stored dashboard data.

The AI prompt is intentionally constrained:

- Use only stored Zach OS dashboard data.
- Do not make medical claims.
- Give cautious, practical, coach-like observations with the metric evidence behind each recommendation.
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

## Learning Zone

Open `/learning-zone` after logging in.

The wheel selects one registered broad topic, then Zach OS randomises the
specific lesson inside that topic. The current library covers philosophy,
marketing, economics, science, linguistics and etymology, art history,
literature, anthropology, politics, sociology, artificial intelligence, social
engineering, business and pharmaceutical businesses. Each topic has at least 10
lessons, and each concept is ranked as GCSE, A-level or University level.

Each lesson is an original reading with references shown beside the text. The
seed library uses open textbook sources, including OpenStax, CORE Econ,
University of Minnesota Libraries, Rebus Community philosophy texts, open
linguistics, anthropology, art history and literature textbooks, plus selected
primary/reference sources where useful.

Each quiz has three multiple-choice questions:

- Knowledge: core concept recall.
- Reasoning: selecting the best inference or distinction.
- Application: using the idea in a practical scenario.

Completed quizzes are stored in `learning_sessions`. The headline intellect
score is the cumulative total of:

- Knowledge points from correct concept questions.
- Reasoning points from correct inference questions.
- Application points from correct scenario questions.
- Breadth points for covering and rotating topics.
- Retention points for revisiting older lessons.

## Garmin Import

Garmin remains export-based and safe. Use it for Garmin-specific health and
recovery metrics such as sleep score, HRV, resting HR, training status and
training load. The recommended path is the account-export ZIP importer because
it auto-detects known Garmin JSON files and does not require column mapping.

For a full historical import:

- Request/export your Garmin account data from Garmin.
- Upload the original ZIP at `/garmin-import`.
- Zach OS imports activity summaries, sleep scores, sleep duration, HRV, resting HR, training status and acute training load where those JSON files exist.
- The import page shows the latest activity and recovery dates already stored so you can see whether another export is needed.
- Re-running the same ZIP is safe; activities are upserted by Garmin activity ID and fitness metrics by date.
- After large historical imports, the dashboard loads the newest rows first and then sorts them for charts, so old archive rows do not hide recent data.

For smaller/manual imports:

- Export CSV data from Garmin yourself.
- Upload the CSV in Zach OS.
- Preview parsed rows.
- Map CSV columns to Zach OS fields.
- Save the import.

The deployed Vercel app does **not** store Garmin account credentials and does
not scrape Garmin Connect login. For automation, Zach OS now includes an
optional local-only sync script in [`scripts/garmin-sync`](./scripts/garmin-sync)
that creates Garmin tokens through your normal local Chrome/Edge browser, stores
those tokens in `.garmin-tokens/`, keeps credentials out of GitHub and Vercel,
and writes small daily batches into Supabase.

Supported import fields:

- Activity fields: `date`, `activity_type`, `distance_km`, `duration_minutes`, `avg_hr`, `max_hr`, `calories`, `training_effect`, `notes`
- Fitness metric fields: `sleep_score`, `hrv`, `resting_hr`, `training_load`
- Garmin-only or legacy import fields retained for compatibility: `sleep_hours`, `weekly_distance_km`, `training_status`

Distance columns with mile-style headers are converted to kilometres during import.

Large Garmin account exports can be uploaded on the deployed site. If the ZIP is
too large for a direct Vercel upload, Zach OS extracts the useful Garmin JSON
files in the browser and saves them in smaller batches. Keep the tab open while
that import runs. A local `npm run dev` import is still fine, but it is no
longer required for large ZIPs.

### Optional Local Garmin Automation

This is the recommended automation path because it avoids Vercel upload limits
and does not need Strava.

First, run the database migration in Supabase:

```sql
create table if not exists public.garmin_sync_runs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  started_at timestamptz not null default now(),
  finished_at timestamptz,
  status text not null check (status in ('running', 'success', 'error')),
  message text,
  activities_upserted integer not null default 0,
  fitness_days_upserted integer not null default 0,
  lookback_days integer,
  created_at timestamptz not null default now()
);

alter table public.garmin_sync_runs enable row level security;

drop policy if exists "Users can read their own Garmin sync runs" on public.garmin_sync_runs;
drop policy if exists "Users can insert their own Garmin sync runs" on public.garmin_sync_runs;
drop policy if exists "Users can update their own Garmin sync runs" on public.garmin_sync_runs;
drop policy if exists "Users can delete their own Garmin sync runs" on public.garmin_sync_runs;

create policy "Users can read their own Garmin sync runs"
  on public.garmin_sync_runs
  for select
  using (auth.uid() = user_id);

create policy "Users can insert their own Garmin sync runs"
  on public.garmin_sync_runs
  for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own Garmin sync runs"
  on public.garmin_sync_runs
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can delete their own Garmin sync runs"
  on public.garmin_sync_runs
  for delete
  using (auth.uid() = user_id);

create index if not exists garmin_sync_runs_user_started_idx
  on public.garmin_sync_runs (user_id, started_at desc);
```

Then get your Supabase user id:

```sql
select id, email
from auth.users
where email = 'zach.haggar15@gmail.com';
```

Set up the local Python environment:

```powershell
powershell -ExecutionPolicy Bypass -File scripts\garmin-sync\setup.ps1
```

If PowerShell says Python was not found, install Python 3.12+ from
<https://www.python.org/downloads/windows/> and tick **Add python.exe to PATH**.

Fill in `.env.garmin-sync`:

```bash
GARMIN_TOKEN_DIR=.garmin-tokens

SUPABASE_URL=https://your-real-project-ref.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
ZACH_USER_ID=your-supabase-auth-user-id

GARMIN_SYNC_LOOKBACK_DAYS=14
```

For `SUPABASE_URL`, use the **Project URL** from Supabase **Project Settings >
API**. It should start with `https://` and end with `.supabase.co`; do not use a
Supabase dashboard URL or the placeholder value.

Run the one-time browser login:

```powershell
powershell -ExecutionPolicy Bypass -File scripts\garmin-sync\login.ps1
```

Log in to Garmin in your normal browser. Zach OS temporarily listens on
`127.0.0.1`, captures Garmin's redirect ticket, and saves
`.garmin-tokens/garmin_tokens.json`. Then run the sync:

```powershell
powershell -ExecutionPolicy Bypass -File scripts\garmin-sync\run.ps1 -Days 14
```

After the first successful browser login, the script should reuse local tokens
automatically. If Garmin later returns a `429` login error or the token expires,
rerun `login.ps1`, then rerun `run.ps1`.

If Garmin logs you in but the terminal never captures the ticket, use the manual
fallback:

```powershell
powershell -ExecutionPolicy Bypass -File scripts\garmin-sync\login.ps1 -Manual
```

For the daily Codex automation, enable **Zach OS Garmin Sync** after the first
manual run. It runs this command every morning:

```powershell
powershell -ExecutionPolicy Bypass -File scripts\garmin-sync\run.ps1 -Days 14
```

If Garmin revokes the token later, run `login.ps1` once to refresh the browser
token, then run the sync command again.

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
  - `Amundi Prime All Country World UCITS ETF Acc GBP`, 1000 units, priced through the `AMUNDI_PRIME_ACWI` alias where a public quote is available

Holdings can be edited from the UI and new accounts or holdings can be added later.

Market price keys are optional. Add one or both keys for the preferred paid/API
providers:

```bash
FMP_API_KEY=your-financial-modeling-prep-key
ALPHA_VANTAGE_API_KEY=your-alpha-vantage-key
```

Zach OS tries Financial Modeling Prep first, then Alpha Vantage, then a no-key
Yahoo Finance chart fallback that works better for ETF quotes such as `VUAG.L`,
`WEXU.L` and the `AMUNDI_PRIME_ACWI` alias. Automatic price refreshes run while
signed in on Mondays and Thursdays, using the most recent Monday/Thursday as the
active price window. The manual **Refresh prices** button on `/portfolio`
forces an immediate refresh outside that cadence. Yahoo quotes in GBp are
converted to GBP, and EUR/USD/CHF quotes are converted back to GBP when a Yahoo
FX quote is available. If no live quote is found, portfolio editing still works
and any manual prices you enter are kept.

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
OPENAI_MODEL=gpt-4o
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
3. Make sure password-based email login is enabled. For easiest personal use,
   use an email and password as the normal login method; keep email-link login
   only as a backup/recovery route.
4. In **Authentication > URL Configuration**, add redirect URLs for the app:
   - `http://localhost:3000/auth/callback`
   - `https://your-vercel-domain.vercel.app/auth/callback`
5. Copy the project URL and anon key into `.env.local`.
6. For a fresh database, run [`supabase/schema.sql`](./supabase/schema.sql) in the Supabase SQL Editor.
7. For an existing Zach OS database, run the migration files in [`supabase/migrations`](./supabase/migrations), including `20260623_add_sleep_score_simplify_manual_input.sql`, `20260623_add_garmin_training_load.sql`, `20260623_add_portfolio_module.sql`, `20260626_add_daily_routine_logs.sql`, `20260702_add_garmin_sync_runs.sql` and `20260702_add_ai_weekly_insights.sql`.
   Also run `20260709_add_learning_zone.sql` for Learning Zone scoring.
8. Start the app, create an account, then log in.

### Easier Login Flow

If the account was originally made through an email sign-in link and password
login says "invalid login credentials":

1. On the Zach OS login screen, use **Send password setup link**.
2. Open the link from your email.
3. Go to `/manage`.
4. Use **Account > Password access** to set a password.
5. Log out and sign back in with email and password.

You can also sign in once with the backup email-link login and then set the
password from `/manage`. After that, the email link should only be needed for
recovery.

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

- `garmin_sync_runs`
  - `id uuid primary key`
  - `user_id uuid references auth.users(id)`
  - `started_at timestamptz`
  - `finished_at timestamptz`
  - `status text`
  - `message text`
  - `activities_upserted integer`
  - `fitness_days_upserted integer`
  - `lookback_days integer`
  - `created_at timestamptz`

- `ai_weekly_insights`
  - `id uuid primary key`
  - `user_id uuid references auth.users(id)`
  - `insight_type text`
  - `period_start date`
  - `period_end date`
  - `source text`
  - `model text`
  - `content text`
  - `generated_at timestamptz`
  - `created_at timestamptz`

- `learning_sessions`
  - `id uuid primary key`
  - `user_id uuid references auth.users(id)`
  - `lesson_slug text`
  - `topic text`
  - `started_at timestamptz`
  - `completed_at timestamptz`
  - `reading_seconds integer`
  - `correct_count integer`
  - `total_questions integer`
  - `knowledge_points integer`
  - `reasoning_points integer`
  - `application_points integer`
  - `breadth_points integer`
  - `retention_points integer`
  - `score_points integer`
  - `answer_payload jsonb`
  - `created_at timestamptz`

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
- `garmin_sync_runs`
- `ai_weekly_insights`
- `learning_sessions`
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

## Drilldown Pages

The dashboard is the home screen. Detail pages use the same editorial dashboard
style and feed directly from the same Supabase tables:

- `/mood` shows mood only.
- `/running` shows weekly/monthly running trends, average HR trend, coach cards,
  pace-band HR comparisons and a stored weekly running insight.
- `/activities` groups activities into running, gym and other. Garmin strength
  training is treated as gym. Running rows open into `/activities/[id]`.
- `/recovery` uses Garmin-style recovery inputs only: sleep score, HRV, resting
  HR and training load.
- `/hrv` focuses on HRV and its relationship to load.

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
- GBP 10k Invested
- GBP 50k Net Worth
- GBP 100k Net Worth

## Quests

Quests are created manually from the dashboard, but progress is mostly derived
automatically from stored data. The saved `current_value` is treated as a
fallback/manual override when Zach OS cannot infer the metric.

Fields:

- `title`
- `category`
- `target_metric`
- `target_value`
- `current_value`
- `deadline`
- `status`

Auto-derived target examples:

- `running km`
- `deep work`
- `French`
- `reading`
- `writing`
- `consultant readiness`
- `invested`
- `net worth`
- `sleep score`
- `HRV`

Example quests:

- Run Wales
- Become Consultant Ready
- Reach GBP 100k Invested
- Become Conversational in French

The dashboard shows active quests, progress bars and a next suggested action based on the active quest with the lowest progress. Quest progress is auto-derived when the title, category or target metric mentions running/distance, deep work, French, reading, writing, consultant readiness, invested value, net worth, cash, sleep, recovery, HRV, mood, streaks or logs.

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

`OPENAI_API_KEY`, `FMP_API_KEY` and `ALPHA_VANTAGE_API_KEY` are optional. Do not add `OPENAI_API_KEY` if you do not want AI summaries enabled. Automatic market prices can use the FMP and Alpha Vantage keys when available, then fall back to no-key Yahoo Finance chart quotes.

4. Deploy.
5. In Supabase Auth settings, add your Vercel domain to the allowed redirect/site URLs if you enable email confirmation links.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```
