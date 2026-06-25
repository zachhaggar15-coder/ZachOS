create extension if not exists pgcrypto;

alter table public.activities
  add column if not exists source text not null default 'manual',
  add column if not exists external_id text,
  add column if not exists synced_at timestamptz;

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

alter table public.strava_connections enable row level security;

drop policy if exists "Users can read their own Strava connection" on public.strava_connections;
drop policy if exists "Users can insert their own Strava connection" on public.strava_connections;
drop policy if exists "Users can update their own Strava connection" on public.strava_connections;
drop policy if exists "Users can delete their own Strava connection" on public.strava_connections;

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

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'activities_user_source_external_id_key'
  ) then
    alter table public.activities
      add constraint activities_user_source_external_id_key
      unique (user_id, source, external_id);
  end if;
end $$;

create index if not exists strava_connections_user_id_idx
  on public.strava_connections (user_id);
