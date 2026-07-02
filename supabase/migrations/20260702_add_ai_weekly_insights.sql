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

alter table public.ai_weekly_insights enable row level security;

drop policy if exists "Users can read their own AI weekly insights" on public.ai_weekly_insights;
drop policy if exists "Users can insert their own AI weekly insights" on public.ai_weekly_insights;
drop policy if exists "Users can update their own AI weekly insights" on public.ai_weekly_insights;
drop policy if exists "Users can delete their own AI weekly insights" on public.ai_weekly_insights;

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

create index if not exists ai_weekly_insights_user_type_period_idx
  on public.ai_weekly_insights (user_id, insight_type, period_start desc);
