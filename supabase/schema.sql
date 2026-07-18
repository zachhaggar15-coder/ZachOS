create extension if not exists pgcrypto;

create table if not exists public.activities (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  date date not null,
  activity_type text,
  distance_km numeric check (distance_km is null or distance_km >= 0),
  duration_minutes numeric check (duration_minutes is null or duration_minutes >= 0),
  avg_hr numeric check (avg_hr is null or avg_hr >= 0),
  max_hr numeric check (max_hr is null or max_hr >= 0),
  calories numeric check (calories is null or calories >= 0),
  training_effect text,
  notes text,
  source text not null default 'manual',
  external_id text,
  synced_at timestamptz,
  created_at timestamptz not null default now(),
  unique (user_id, source, external_id)
);

create table if not exists public.strava_connections (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  athlete_id bigint,
  athlete_name text,
  scope text,
  access_token text not null,
  refresh_token text not null,
  expires_at bigint not null,
  last_sync_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id)
);

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

create table if not exists public.ai_weekly_insights (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  insight_type text not null,
  period_start date not null,
  period_end date not null,
  source text not null default 'fallback' check (source in ('fallback', 'openai')),
  model text,
  content text not null,
  generated_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  unique (user_id, insight_type, period_start)
);

create table if not exists public.learning_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_slug text not null,
  topic text not null check (topic in ('philosophy', 'marketing', 'economics', 'science', 'linguistics-etymology', 'art-history', 'literature', 'anthropology', 'politics', 'sociology', 'artificial-intelligence', 'architecture-urbanism', 'social-engineering', 'business', 'classical-civilisation', 'geopolitics', 'history-of-ideas', 'military-strategy', 'music-theory', 'pharmaceutical-businesses', 'psychology', 'rhetoric-argumentation', 'systems-thinking')),
  started_at timestamptz not null default now(),
  completed_at timestamptz not null default now(),
  reading_seconds integer not null default 0 check (reading_seconds >= 0),
  correct_count integer not null default 0 check (correct_count >= 0),
  total_questions integer not null check (total_questions > 0),
  knowledge_points integer not null default 0 check (knowledge_points >= 0),
  reasoning_points integer not null default 0 check (reasoning_points >= 0),
  application_points integer not null default 0 check (application_points >= 0),
  breadth_points integer not null default 0 check (breadth_points >= 0),
  retention_points integer not null default 0 check (retention_points >= 0),
  depth_points integer not null default 0 check (depth_points >= 0),
  consistency_points integer not null default 0 check (consistency_points >= 0),
  score_points integer not null default 0 check (score_points >= 0),
  answer_payload jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.learning_lesson_notes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_slug text not null,
  topic text not null,
  note text,
  highlight text,
  revisit boolean not null default false,
  bookmarked boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, lesson_slug)
);

create table if not exists public.daily_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  date date not null,
  mood_score integer check (mood_score is null or mood_score between 1 and 10),
  deep_work_hours numeric check (deep_work_hours is null or deep_work_hours >= 0),
  french_minutes integer check (french_minutes is null or french_minutes >= 0),
  reading_pages integer check (reading_pages is null or reading_pages >= 0),
  writing_minutes integer check (writing_minutes is null or writing_minutes >= 0),
  notes text,
  created_at timestamptz not null default now(),
  unique (user_id, date)
);

create table if not exists public.daily_routine_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  date date not null,
  routine_key text not null check (
    routine_key in (
      'train',
      'deep_work',
      'french',
      'read',
      'ate_well',
      'cold_shower'
    )
  ),
  completed boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, date, routine_key)
);

create table if not exists public.fitness_metrics (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  date date not null,
  sleep_hours numeric check (sleep_hours is null or sleep_hours >= 0),
  sleep_score numeric check (sleep_score is null or sleep_score >= 0),
  hrv numeric check (hrv is null or hrv >= 0),
  resting_hr numeric check (resting_hr is null or resting_hr >= 0),
  training_load numeric check (training_load is null or training_load >= 0),
  weekly_distance_km numeric check (weekly_distance_km is null or weekly_distance_km >= 0),
  training_status text,
  created_at timestamptz not null default now(),
  unique (user_id, date)
);

create table if not exists public.finance_snapshots (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  date date not null,
  cash_gbp numeric,
  isa_gbp numeric check (isa_gbp is null or isa_gbp >= 0),
  lifetime_isa_gbp numeric check (lifetime_isa_gbp is null or lifetime_isa_gbp >= 0),
  invested_gbp numeric,
  net_worth_gbp numeric,
  net_worth_change_percent numeric,
  created_at timestamptz not null default now(),
  unique (user_id, date)
);

create table if not exists public.portfolio_accounts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  type text not null check (type in ('ISA', 'LISA', 'Cash', 'Pension')),
  provider text,
  created_at timestamptz not null default now()
);

create table if not exists public.portfolio_holdings (
  id uuid primary key default gen_random_uuid(),
  account_id uuid not null references public.portfolio_accounts(id) on delete cascade,
  ticker text,
  fund_name text,
  exchange text,
  units numeric not null default 0 check (units >= 0),
  currency text not null default 'GBP',
  auto_price_updates boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.market_prices (
  ticker text primary key,
  price numeric not null check (price >= 0),
  currency text not null default 'GBP',
  updated_at timestamptz not null default now()
);

create table if not exists public.net_worth_snapshots (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  date date not null,
  estimated_net_worth numeric,
  invested_value numeric,
  cash_value numeric,
  created_at timestamptz not null default now(),
  unique (user_id, date)
);

create table if not exists public.quests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  category text,
  target_metric text,
  target_value numeric check (target_value is null or target_value >= 0),
  current_value numeric check (current_value is null or current_value >= 0),
  deadline date,
  status text default 'active',
  created_at timestamptz not null default now()
);

alter table public.activities enable row level security;
alter table public.strava_connections enable row level security;
alter table public.garmin_sync_runs enable row level security;
alter table public.ai_weekly_insights enable row level security;
alter table public.learning_sessions enable row level security;
alter table public.learning_lesson_notes enable row level security;
alter table public.daily_logs enable row level security;
alter table public.daily_routine_logs enable row level security;
alter table public.fitness_metrics enable row level security;
alter table public.finance_snapshots enable row level security;
alter table public.portfolio_accounts enable row level security;
alter table public.portfolio_holdings enable row level security;
alter table public.market_prices enable row level security;
alter table public.net_worth_snapshots enable row level security;
alter table public.quests enable row level security;

drop policy if exists "Users can read their own activities" on public.activities;
drop policy if exists "Users can insert their own activities" on public.activities;
drop policy if exists "Users can update their own activities" on public.activities;
drop policy if exists "Users can delete their own activities" on public.activities;
drop policy if exists "Users can read their own Strava connection" on public.strava_connections;
drop policy if exists "Users can insert their own Strava connection" on public.strava_connections;
drop policy if exists "Users can update their own Strava connection" on public.strava_connections;
drop policy if exists "Users can delete their own Strava connection" on public.strava_connections;
drop policy if exists "Users can read their own Garmin sync runs" on public.garmin_sync_runs;
drop policy if exists "Users can insert their own Garmin sync runs" on public.garmin_sync_runs;
drop policy if exists "Users can update their own Garmin sync runs" on public.garmin_sync_runs;
drop policy if exists "Users can delete their own Garmin sync runs" on public.garmin_sync_runs;
drop policy if exists "Users can read their own AI weekly insights" on public.ai_weekly_insights;
drop policy if exists "Users can insert their own AI weekly insights" on public.ai_weekly_insights;
drop policy if exists "Users can update their own AI weekly insights" on public.ai_weekly_insights;
drop policy if exists "Users can delete their own AI weekly insights" on public.ai_weekly_insights;
drop policy if exists "Users can read their own learning sessions" on public.learning_sessions;
drop policy if exists "Users can insert their own learning sessions" on public.learning_sessions;
drop policy if exists "Users can update their own learning sessions" on public.learning_sessions;
drop policy if exists "Users can delete their own learning sessions" on public.learning_sessions;
drop policy if exists "Users can read their own daily logs" on public.daily_logs;
drop policy if exists "Users can insert their own daily logs" on public.daily_logs;
drop policy if exists "Users can update their own daily logs" on public.daily_logs;
drop policy if exists "Users can delete their own daily logs" on public.daily_logs;
drop policy if exists "Users can read their own daily routine logs" on public.daily_routine_logs;
drop policy if exists "Users can insert their own daily routine logs" on public.daily_routine_logs;
drop policy if exists "Users can update their own daily routine logs" on public.daily_routine_logs;
drop policy if exists "Users can delete their own daily routine logs" on public.daily_routine_logs;
drop policy if exists "Users can read their own fitness metrics" on public.fitness_metrics;
drop policy if exists "Users can insert their own fitness metrics" on public.fitness_metrics;
drop policy if exists "Users can update their own fitness metrics" on public.fitness_metrics;
drop policy if exists "Users can delete their own fitness metrics" on public.fitness_metrics;
drop policy if exists "Users can read their own finance snapshots" on public.finance_snapshots;
drop policy if exists "Users can insert their own finance snapshots" on public.finance_snapshots;
drop policy if exists "Users can update their own finance snapshots" on public.finance_snapshots;
drop policy if exists "Users can delete their own finance snapshots" on public.finance_snapshots;
drop policy if exists "Users can read their own portfolio accounts" on public.portfolio_accounts;
drop policy if exists "Users can insert their own portfolio accounts" on public.portfolio_accounts;
drop policy if exists "Users can update their own portfolio accounts" on public.portfolio_accounts;
drop policy if exists "Users can delete their own portfolio accounts" on public.portfolio_accounts;
drop policy if exists "Users can read their own portfolio holdings" on public.portfolio_holdings;
drop policy if exists "Users can insert their own portfolio holdings" on public.portfolio_holdings;
drop policy if exists "Users can update their own portfolio holdings" on public.portfolio_holdings;
drop policy if exists "Users can delete their own portfolio holdings" on public.portfolio_holdings;
drop policy if exists "Authenticated users can read market prices" on public.market_prices;
drop policy if exists "Authenticated users can insert market prices" on public.market_prices;
drop policy if exists "Authenticated users can update market prices" on public.market_prices;
drop policy if exists "Users can read their own net worth snapshots" on public.net_worth_snapshots;
drop policy if exists "Users can insert their own net worth snapshots" on public.net_worth_snapshots;
drop policy if exists "Users can update their own net worth snapshots" on public.net_worth_snapshots;
drop policy if exists "Users can delete their own net worth snapshots" on public.net_worth_snapshots;
drop policy if exists "Users can read their own quests" on public.quests;
drop policy if exists "Users can insert their own quests" on public.quests;
drop policy if exists "Users can update their own quests" on public.quests;
drop policy if exists "Users can delete their own quests" on public.quests;

create policy "Users can read their own activities"
  on public.activities
  for select
  using (auth.uid() = user_id);

create policy "Users can insert their own activities"
  on public.activities
  for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own activities"
  on public.activities
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can delete their own activities"
  on public.activities
  for delete
  using (auth.uid() = user_id);

create policy "Users can read their own Strava connection"
  on public.strava_connections
  for select
  using (auth.uid() = user_id);

create policy "Users can insert their own Strava connection"
  on public.strava_connections
  for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own Strava connection"
  on public.strava_connections
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can delete their own Strava connection"
  on public.strava_connections
  for delete
  using (auth.uid() = user_id);

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

create policy "Users can read their own AI weekly insights"
  on public.ai_weekly_insights
  for select
  using (auth.uid() = user_id);

create policy "Users can insert their own AI weekly insights"
  on public.ai_weekly_insights
  for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own AI weekly insights"
  on public.ai_weekly_insights
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can delete their own AI weekly insights"
  on public.ai_weekly_insights
  for delete
  using (auth.uid() = user_id);

create policy "Users can read their own learning sessions"
  on public.learning_sessions
  for select
  using (auth.uid() = user_id);

create policy "Users can insert their own learning sessions"
  on public.learning_sessions
  for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own learning sessions"
  on public.learning_sessions
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can delete their own learning sessions"
  on public.learning_sessions
  for delete
  using (auth.uid() = user_id);

create policy "Users can read their own learning lesson notes"
  on public.learning_lesson_notes
  for select
  using (auth.uid() = user_id);

create policy "Users can insert their own learning lesson notes"
  on public.learning_lesson_notes
  for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own learning lesson notes"
  on public.learning_lesson_notes
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can delete their own learning lesson notes"
  on public.learning_lesson_notes
  for delete
  using (auth.uid() = user_id);

create policy "Users can read their own daily logs"
  on public.daily_logs
  for select
  using (auth.uid() = user_id);

create policy "Users can insert their own daily logs"
  on public.daily_logs
  for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own daily logs"
  on public.daily_logs
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can delete their own daily logs"
  on public.daily_logs
  for delete
  using (auth.uid() = user_id);

create policy "Users can read their own daily routine logs"
  on public.daily_routine_logs
  for select
  using (auth.uid() = user_id);

create policy "Users can insert their own daily routine logs"
  on public.daily_routine_logs
  for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own daily routine logs"
  on public.daily_routine_logs
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can delete their own daily routine logs"
  on public.daily_routine_logs
  for delete
  using (auth.uid() = user_id);

create policy "Users can read their own fitness metrics"
  on public.fitness_metrics
  for select
  using (auth.uid() = user_id);

create policy "Users can insert their own fitness metrics"
  on public.fitness_metrics
  for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own fitness metrics"
  on public.fitness_metrics
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can delete their own fitness metrics"
  on public.fitness_metrics
  for delete
  using (auth.uid() = user_id);

create policy "Users can read their own finance snapshots"
  on public.finance_snapshots
  for select
  using (auth.uid() = user_id);

create policy "Users can insert their own finance snapshots"
  on public.finance_snapshots
  for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own finance snapshots"
  on public.finance_snapshots
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can delete their own finance snapshots"
  on public.finance_snapshots
  for delete
  using (auth.uid() = user_id);

create policy "Users can read their own portfolio accounts"
  on public.portfolio_accounts
  for select
  using (auth.uid() = user_id);

create policy "Users can insert their own portfolio accounts"
  on public.portfolio_accounts
  for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own portfolio accounts"
  on public.portfolio_accounts
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can delete their own portfolio accounts"
  on public.portfolio_accounts
  for delete
  using (auth.uid() = user_id);

create policy "Users can read their own portfolio holdings"
  on public.portfolio_holdings
  for select
  using (
    exists (
      select 1
      from public.portfolio_accounts account
      where account.id = portfolio_holdings.account_id
        and account.user_id = auth.uid()
    )
  );

create policy "Users can insert their own portfolio holdings"
  on public.portfolio_holdings
  for insert
  with check (
    exists (
      select 1
      from public.portfolio_accounts account
      where account.id = portfolio_holdings.account_id
        and account.user_id = auth.uid()
    )
  );

create policy "Users can update their own portfolio holdings"
  on public.portfolio_holdings
  for update
  using (
    exists (
      select 1
      from public.portfolio_accounts account
      where account.id = portfolio_holdings.account_id
        and account.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1
      from public.portfolio_accounts account
      where account.id = portfolio_holdings.account_id
        and account.user_id = auth.uid()
    )
  );

create policy "Users can delete their own portfolio holdings"
  on public.portfolio_holdings
  for delete
  using (
    exists (
      select 1
      from public.portfolio_accounts account
      where account.id = portfolio_holdings.account_id
        and account.user_id = auth.uid()
    )
  );

create policy "Authenticated users can read market prices"
  on public.market_prices
  for select
  using (auth.role() = 'authenticated');

create policy "Users can read their own net worth snapshots"
  on public.net_worth_snapshots
  for select
  using (auth.uid() = user_id);

create policy "Users can insert their own net worth snapshots"
  on public.net_worth_snapshots
  for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own net worth snapshots"
  on public.net_worth_snapshots
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can delete their own net worth snapshots"
  on public.net_worth_snapshots
  for delete
  using (auth.uid() = user_id);

create policy "Users can read their own quests"
  on public.quests
  for select
  using (auth.uid() = user_id);

create policy "Users can insert their own quests"
  on public.quests
  for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own quests"
  on public.quests
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can delete their own quests"
  on public.quests
  for delete
  using (auth.uid() = user_id);

create index if not exists activities_user_date_idx
  on public.activities (user_id, date desc);

create index if not exists activities_user_type_date_idx
  on public.activities (user_id, activity_type, date desc);

create index if not exists strava_connections_user_id_idx
  on public.strava_connections (user_id);

create index if not exists garmin_sync_runs_user_started_idx
  on public.garmin_sync_runs (user_id, started_at desc);

create index if not exists ai_weekly_insights_user_type_period_idx
  on public.ai_weekly_insights (user_id, insight_type, period_start desc);

create index if not exists learning_sessions_user_completed_idx
  on public.learning_sessions (user_id, completed_at desc);

create index if not exists learning_sessions_user_topic_idx
  on public.learning_sessions (user_id, topic, completed_at desc);

create index if not exists learning_lesson_notes_user_updated_idx
  on public.learning_lesson_notes (user_id, updated_at desc);

create index if not exists learning_lesson_notes_user_topic_idx
  on public.learning_lesson_notes (user_id, topic, updated_at desc);

create index if not exists daily_logs_user_date_idx
  on public.daily_logs (user_id, date desc);

create index if not exists daily_routine_logs_user_date_idx
  on public.daily_routine_logs (user_id, date desc, routine_key);

create index if not exists fitness_metrics_user_date_idx
  on public.fitness_metrics (user_id, date desc);

create index if not exists finance_snapshots_user_date_idx
  on public.finance_snapshots (user_id, date desc);

create index if not exists portfolio_accounts_user_idx
  on public.portfolio_accounts (user_id, type);

create index if not exists portfolio_holdings_account_idx
  on public.portfolio_holdings (account_id);

create index if not exists market_prices_updated_at_idx
  on public.market_prices (updated_at desc);

create index if not exists net_worth_snapshots_user_date_idx
  on public.net_worth_snapshots (user_id, date desc);

create index if not exists quests_user_status_deadline_idx
  on public.quests (user_id, status, deadline);
