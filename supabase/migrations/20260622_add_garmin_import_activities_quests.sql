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
  created_at timestamptz not null default now()
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
alter table public.quests enable row level security;

drop policy if exists "Users can read their own activities" on public.activities;
drop policy if exists "Users can insert their own activities" on public.activities;
drop policy if exists "Users can update their own activities" on public.activities;
drop policy if exists "Users can delete their own activities" on public.activities;
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

create index if not exists quests_user_status_deadline_idx
  on public.quests (user_id, status, deadline);
