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
      'social-engineering',
      'business',
      'pharmaceutical-businesses'
    )
  );
