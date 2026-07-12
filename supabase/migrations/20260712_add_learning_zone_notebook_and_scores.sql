alter table public.learning_sessions
  add column if not exists depth_points integer not null default 0 check (depth_points >= 0),
  add column if not exists consistency_points integer not null default 0 check (consistency_points >= 0);

update public.learning_sessions
set depth_points = knowledge_points + application_points
where depth_points = 0
  and (knowledge_points > 0 or application_points > 0);

alter table public.learning_sessions
  drop constraint if exists learning_sessions_topic_check;

alter table public.learning_sessions
  add constraint learning_sessions_topic_check
  check (
    topic in (
      'philosophy',
      'marketing',
      'economics',
      'science',
      'linguistics-etymology',
      'art-history',
      'literature',
      'anthropology',
      'politics',
      'sociology',
      'artificial-intelligence',
      'architecture-urbanism',
      'social-engineering',
      'business',
      'classical-civilisation',
      'geopolitics',
      'history-of-ideas',
      'military-strategy',
      'music-theory',
      'pharmaceutical-businesses',
      'psychology',
      'rhetoric-argumentation',
      'systems-thinking'
    )
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

alter table public.learning_lesson_notes enable row level security;

drop policy if exists "Users can read their own learning lesson notes" on public.learning_lesson_notes;
drop policy if exists "Users can insert their own learning lesson notes" on public.learning_lesson_notes;
drop policy if exists "Users can update their own learning lesson notes" on public.learning_lesson_notes;
drop policy if exists "Users can delete their own learning lesson notes" on public.learning_lesson_notes;

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

create index if not exists learning_lesson_notes_user_updated_idx
  on public.learning_lesson_notes (user_id, updated_at desc);

create index if not exists learning_lesson_notes_user_topic_idx
  on public.learning_lesson_notes (user_id, topic, updated_at desc);
