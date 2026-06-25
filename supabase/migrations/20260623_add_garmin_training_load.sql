alter table public.fitness_metrics
  add column if not exists training_load numeric check (training_load is null or training_load >= 0);

comment on column public.fitness_metrics.training_load is
  'Garmin acute training load imported from full Garmin account exports.';
