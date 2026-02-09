-- =============================================
-- Aura Luxury Transport - Customer Database
-- Technology: Supabase (PostgreSQL)
-- =============================================

-- Enable UUID generation
create extension if not exists "uuid-ossp";

-- =============================================
-- Customers Table
-- =============================================
create table customers (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default now() not null,
  updated_at timestamp with time zone default now() not null,
  first_name text not null,
  last_name text not null,
  email text unique not null,
  phone_number text,
  address_line_1 text,
  address_line_2 text,
  city text, 
  state text,
  zip_code text,
  country text default 'US',
  status text default 'active' check (status in ('active', 'inactive', 'archived'))
);

-- Index for fast email lookups
create index idx_customers_email on customers (email);

-- Index for name searches
create index idx_customers_name on customers (last_name, first_name);

-- Auto-update the updated_at timestamp
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger customers_updated_at
  before update on customers
  for each row
  execute function update_updated_at();

-- =============================================
-- Row Level Security
-- =============================================
alter table customers enable row level security;

-- Allow authenticated users to read all customers
create policy "Allow authenticated read access"
  on customers for select
  to authenticated
  using (true);

-- Allow authenticated users to insert customers
create policy "Allow authenticated insert"
  on customers for insert
  to authenticated
  with check (true);

-- Allow authenticated users to update customers
create policy "Allow authenticated update"
  on customers for update
  to authenticated
  using (true);

-- Allow anonymous users to insert (for public booking form)
create policy "Allow anonymous insert"
  on customers for insert
  to anon
  with check (true);

-- Allow anonymous users to select (needed for upsert conflict check)
create policy "Allow anonymous select"
  on customers for select
  to anon
  using (true);

-- Allow anonymous users to update (needed for upsert on existing customers)
create policy "Allow anonymous update"
  on customers for update
  to anon
  using (true);
