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

alter table public.consultant_readiness_logs enable row level security;

drop policy if exists "Users can read their own consultant readiness logs" on public.consultant_readiness_logs;
drop policy if exists "Users can insert their own consultant readiness logs" on public.consultant_readiness_logs;
drop policy if exists "Users can update their own consultant readiness logs" on public.consultant_readiness_logs;
drop policy if exists "Users can delete their own consultant readiness logs" on public.consultant_readiness_logs;

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

create index if not exists consultant_readiness_logs_user_date_idx
  on public.consultant_readiness_logs (user_id, date desc);
