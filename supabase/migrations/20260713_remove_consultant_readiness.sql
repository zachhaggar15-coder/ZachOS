-- Remove Consultant Mode / Veeva readiness.
--
-- The readiness score was a weighted proxy over deep work, reading and writing;
-- it measured effort, not readiness, so it is gone. Writing practice is a real
-- daily habit though, so writing_minutes moves onto daily_logs before the
-- consultant table is dropped.

alter table public.daily_logs
  add column if not exists writing_minutes integer;

-- Carry across whatever was already logged, newest row per day winning.
update public.daily_logs as d
set writing_minutes = c.writing_minutes
from public.consultant_readiness_logs as c
where c.user_id = d.user_id
  and c.date = d.date
  and c.writing_minutes is not null
  and d.writing_minutes is null;

-- Any consultant rows with no matching daily_log become one.
insert into public.daily_logs (user_id, date, writing_minutes)
select c.user_id, c.date, c.writing_minutes
from public.consultant_readiness_logs as c
where c.writing_minutes is not null
  and not exists (
    select 1
    from public.daily_logs as d
    where d.user_id = c.user_id and d.date = c.date
  )
on conflict (user_id, date) do nothing;

drop table if exists public.consultant_readiness_logs;
