create extension if not exists pgcrypto;

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

alter table public.daily_routine_logs enable row level security;

drop policy if exists "Users can read their own daily routine logs" on public.daily_routine_logs;
drop policy if exists "Users can insert their own daily routine logs" on public.daily_routine_logs;
drop policy if exists "Users can update their own daily routine logs" on public.daily_routine_logs;
drop policy if exists "Users can delete their own daily routine logs" on public.daily_routine_logs;

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

create index if not exists daily_routine_logs_user_date_idx
  on public.daily_routine_logs (user_id, date desc, routine_key);
