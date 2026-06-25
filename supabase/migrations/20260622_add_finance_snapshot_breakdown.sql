alter table public.finance_snapshots
  add column if not exists isa_gbp numeric check (isa_gbp is null or isa_gbp >= 0),
  add column if not exists lifetime_isa_gbp numeric check (lifetime_isa_gbp is null or lifetime_isa_gbp >= 0),
  add column if not exists net_worth_change_percent numeric;
