alter table public.fitness_metrics
  add column if not exists sleep_score numeric check (sleep_score is null or sleep_score >= 0);

comment on column public.fitness_metrics.sleep_score is
  'Manual or imported sleep score used by Zach OS recovery views. Legacy sleep_hours is retained for older data/import compatibility.';
