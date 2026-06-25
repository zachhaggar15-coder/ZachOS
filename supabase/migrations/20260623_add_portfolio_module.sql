create table if not exists public.portfolio_accounts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  type text not null check (type in ('ISA', 'LISA', 'Cash', 'Pension')),
  provider text,
  created_at timestamptz not null default now()
);

create table if not exists public.portfolio_holdings (
  id uuid primary key default gen_random_uuid(),
  account_id uuid not null references public.portfolio_accounts(id) on delete cascade,
  ticker text,
  fund_name text,
  exchange text,
  units numeric not null default 0 check (units >= 0),
  currency text not null default 'GBP',
  auto_price_updates boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.market_prices (
  ticker text primary key,
  price numeric not null check (price >= 0),
  currency text not null default 'GBP',
  updated_at timestamptz not null default now()
);

create table if not exists public.net_worth_snapshots (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  date date not null,
  estimated_net_worth numeric,
  invested_value numeric,
  cash_value numeric,
  created_at timestamptz not null default now(),
  unique (user_id, date)
);

alter table public.portfolio_accounts enable row level security;
alter table public.portfolio_holdings enable row level security;
alter table public.market_prices enable row level security;
alter table public.net_worth_snapshots enable row level security;

drop policy if exists "Users can read their own portfolio accounts" on public.portfolio_accounts;
drop policy if exists "Users can insert their own portfolio accounts" on public.portfolio_accounts;
drop policy if exists "Users can update their own portfolio accounts" on public.portfolio_accounts;
drop policy if exists "Users can delete their own portfolio accounts" on public.portfolio_accounts;
drop policy if exists "Users can read their own portfolio holdings" on public.portfolio_holdings;
drop policy if exists "Users can insert their own portfolio holdings" on public.portfolio_holdings;
drop policy if exists "Users can update their own portfolio holdings" on public.portfolio_holdings;
drop policy if exists "Users can delete their own portfolio holdings" on public.portfolio_holdings;
drop policy if exists "Authenticated users can read market prices" on public.market_prices;
drop policy if exists "Authenticated users can insert market prices" on public.market_prices;
drop policy if exists "Authenticated users can update market prices" on public.market_prices;
drop policy if exists "Users can read their own net worth snapshots" on public.net_worth_snapshots;
drop policy if exists "Users can insert their own net worth snapshots" on public.net_worth_snapshots;
drop policy if exists "Users can update their own net worth snapshots" on public.net_worth_snapshots;
drop policy if exists "Users can delete their own net worth snapshots" on public.net_worth_snapshots;

create policy "Users can read their own portfolio accounts"
  on public.portfolio_accounts
  for select
  using (auth.uid() = user_id);

create policy "Users can insert their own portfolio accounts"
  on public.portfolio_accounts
  for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own portfolio accounts"
  on public.portfolio_accounts
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can delete their own portfolio accounts"
  on public.portfolio_accounts
  for delete
  using (auth.uid() = user_id);

create policy "Users can read their own portfolio holdings"
  on public.portfolio_holdings
  for select
  using (
    exists (
      select 1
      from public.portfolio_accounts account
      where account.id = portfolio_holdings.account_id
        and account.user_id = auth.uid()
    )
  );

create policy "Users can insert their own portfolio holdings"
  on public.portfolio_holdings
  for insert
  with check (
    exists (
      select 1
      from public.portfolio_accounts account
      where account.id = portfolio_holdings.account_id
        and account.user_id = auth.uid()
    )
  );

create policy "Users can update their own portfolio holdings"
  on public.portfolio_holdings
  for update
  using (
    exists (
      select 1
      from public.portfolio_accounts account
      where account.id = portfolio_holdings.account_id
        and account.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1
      from public.portfolio_accounts account
      where account.id = portfolio_holdings.account_id
        and account.user_id = auth.uid()
    )
  );

create policy "Users can delete their own portfolio holdings"
  on public.portfolio_holdings
  for delete
  using (
    exists (
      select 1
      from public.portfolio_accounts account
      where account.id = portfolio_holdings.account_id
        and account.user_id = auth.uid()
    )
  );

create policy "Authenticated users can read market prices"
  on public.market_prices
  for select
  using (auth.role() = 'authenticated');

create policy "Authenticated users can insert market prices"
  on public.market_prices
  for insert
  with check (auth.role() = 'authenticated');

create policy "Authenticated users can update market prices"
  on public.market_prices
  for update
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

create policy "Users can read their own net worth snapshots"
  on public.net_worth_snapshots
  for select
  using (auth.uid() = user_id);

create policy "Users can insert their own net worth snapshots"
  on public.net_worth_snapshots
  for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own net worth snapshots"
  on public.net_worth_snapshots
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can delete their own net worth snapshots"
  on public.net_worth_snapshots
  for delete
  using (auth.uid() = user_id);

create index if not exists portfolio_accounts_user_idx
  on public.portfolio_accounts (user_id, type);

create index if not exists portfolio_holdings_account_idx
  on public.portfolio_holdings (account_id);

create index if not exists market_prices_updated_at_idx
  on public.market_prices (updated_at desc);

create index if not exists net_worth_snapshots_user_date_idx
  on public.net_worth_snapshots (user_id, date desc);
