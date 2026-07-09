create table if not exists public.learning_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_slug text not null,
  topic text not null check (topic in ('philosophy', 'marketing', 'economics', 'science')),
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
  score_points integer not null default 0 check (score_points >= 0),
  answer_payload jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.learning_sessions enable row level security;

drop policy if exists "Users can read their own learning sessions" on public.learning_sessions;
drop policy if exists "Users can insert their own learning sessions" on public.learning_sessions;
drop policy if exists "Users can update their own learning sessions" on public.learning_sessions;
drop policy if exists "Users can delete their own learning sessions" on public.learning_sessions;

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

create index if not exists learning_sessions_user_completed_idx
  on public.learning_sessions (user_id, completed_at desc);

create index if not exists learning_sessions_user_topic_idx
  on public.learning_sessions (user_id, topic, completed_at desc);
