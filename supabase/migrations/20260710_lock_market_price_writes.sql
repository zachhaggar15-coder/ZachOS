drop policy if exists "Authenticated users can insert market prices" on public.market_prices;
drop policy if exists "Authenticated users can update market prices" on public.market_prices;

comment on table public.market_prices is
  'Shared market prices are readable by authenticated users, but writes must go through trusted server-side service-role code.';
