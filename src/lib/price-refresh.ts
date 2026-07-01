const LONDON_TIME_ZONE = "Europe/London";

export const PRICE_REFRESH_DAYS = [1, 4] as const;

type LondonDateParts = {
  isoDate: string;
  weekday: number;
};

const WEEKDAY_BY_NAME: Record<string, number> = {
  Fri: 5,
  Mon: 1,
  Sat: 6,
  Sun: 0,
  Thu: 4,
  Tue: 2,
  Wed: 3,
};

function londonDateParts(date: Date): LondonDateParts {
  const parts = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    timeZone: LONDON_TIME_ZONE,
    weekday: "short",
    year: "numeric",
  }).formatToParts(date);

  const value = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";
  const weekdayName = value("weekday").slice(0, 3);

  return {
    isoDate: `${value("year")}-${value("month")}-${value("day")}`,
    weekday: WEEKDAY_BY_NAME[weekdayName] ?? 0,
  };
}

export function isPriceRefreshDay(date = new Date()) {
  const { weekday } = londonDateParts(date);
  return weekday === 1 || weekday === 4;
}

export function priceRefreshWindowId(date = new Date()) {
  const { isoDate, weekday } = londonDateParts(date);
  const daysSinceRefresh =
    weekday >= 4 ? weekday - 4 : weekday >= 1 ? weekday - 1 : 3;
  const refreshDate = new Date(`${isoDate}T12:00:00Z`);

  refreshDate.setUTCDate(refreshDate.getUTCDate() - daysSinceRefresh);

  return refreshDate.toISOString().slice(0, 10);
}
