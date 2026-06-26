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

create table if not exists public.consultant_readiness_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  date date not null,
  structured_thinking_reps integer check (structured_thinking_reps is null or structured_thinking_reps >= 0),
  writing_minutes integer check (writing_minutes is null or writing_minutes >= 0),
  industry_learning_minutes integer check (industry_learning_minutes is null or industry_learning_minutes >= 0),
  communication_practice_minutes integer check (communication_practice_minutes is null or communication_practice_minutes >= 0),
  notes text,
  created_at timestamptz not null default now(),
  unique (user_id, date)
);

create table if not exists public.daily_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  date date not null,
  mood_score integer check (mood_score is null or mood_score between 1 and 10),
  deep_work_hours numeric check (deep_work_hours is null or deep_work_hours >= 0),
  french_minutes integer check (french_minutes is null or french_minutes >= 0),
  reading_pages integer check (reading_pages is null or reading_pages >= 0),
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
alter table public.consultant_readiness_logs enable row level security;
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
drop policy if exists "Users can read their own consultant readiness logs" on public.consultant_readiness_logs;
drop policy if exists "Users can insert their own consultant readiness logs" on public.consultant_readiness_logs;
drop policy if exists "Users can update their own consultant readiness logs" on public.consultant_readiness_logs;
drop policy if exists "Users can delete their own consultant readiness logs" on public.consultant_readiness_logs;
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

create policy "Users can read their own consultant readiness logs"
  on public.consultant_readiness_logs
  for select
  using (auth.uid() = user_id);

create policy "Users can insert their own consultant readiness logs"
  on public.consultant_readiness_logs
  for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own consultant readiness logs"
  on public.consultant_readiness_logs
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can delete their own consultant readiness logs"
  on public.consultant_readiness_logs
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

create policy "Authenticated users can insert market prices"
  on public.market_prices
  for insert
  with check (auth.role() = 'authenticated');

create policy "Authenticated users can update market prices"
  on public.market_prices
  for update
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

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

create index if not exists consultant_readiness_logs_user_date_idx
  on public.consultant_readiness_logs (user_id, date desc);

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
