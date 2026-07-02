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
