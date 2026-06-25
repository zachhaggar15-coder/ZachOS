import type { SupabaseClient } from "@supabase/supabase-js";

import type { Database } from "@/lib/supabase/database.types";

type StravaConfig = {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
};

type StravaTokenResponse = {
  access_token: string;
  athlete?: {
    firstname?: string;
    id?: number;
    lastname?: string;
    username?: string;
  };
  expires_at: number;
  refresh_token: string;
};

type StravaActivity = {
  average_heartrate?: number;
  calories?: number;
  distance?: number;
  elapsed_time?: number;
  id: number;
  max_heartrate?: number;
  moving_time?: number;
  name?: string;
  sport_type?: string;
  start_date?: string;
  start_date_local?: string;
  type?: string;
};

type StravaConnection =
  Database["public"]["Tables"]["strava_connections"]["Row"];
type ActivityInsert = Database["public"]["Tables"]["activities"]["Insert"];

const STRAVA_AUTHORIZE_URL = "https://www.strava.com/oauth/authorize";
const STRAVA_TOKEN_URL = "https://www.strava.com/oauth/token";
const STRAVA_ACTIVITIES_URL =
  "https://www.strava.com/api/v3/athlete/activities";

export function getStravaConfig(origin?: string): StravaConfig | null {
  const clientId = process.env.STRAVA_CLIENT_ID;
  const clientSecret = process.env.STRAVA_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return null;
  }

  const fallbackOrigin =
    origin ?? process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const redirectUri =
    process.env.STRAVA_REDIRECT_URI ||
    `${fallbackOrigin}/api/strava/callback`;

  return { clientId, clientSecret, redirectUri };
}

export function buildStravaAuthorizeUrl(config: StravaConfig, state: string) {
  const url = new URL(STRAVA_AUTHORIZE_URL);
  url.searchParams.set("client_id", config.clientId);
  url.searchParams.set("redirect_uri", config.redirectUri);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("approval_prompt", "auto");
  url.searchParams.set("scope", "read,activity:read_all");
  url.searchParams.set("state", state);
  return url;
}

async function postStravaToken(params: Record<string, string>) {
  const response = await fetch(STRAVA_TOKEN_URL, {
    body: new URLSearchParams(params),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(
      `Strava token request failed (${response.status}). ${body.slice(0, 180)}`,
    );
  }

  return (await response.json()) as StravaTokenResponse;
}

export function athleteName(token: StravaTokenResponse) {
  const athlete = token.athlete;
  if (!athlete) {
    return null;
  }

  const name = [athlete.firstname, athlete.lastname].filter(Boolean).join(" ");
  return name || athlete.username || null;
}

export async function exchangeStravaCode(config: StravaConfig, code: string) {
  return postStravaToken({
    client_id: config.clientId,
    client_secret: config.clientSecret,
    code,
    grant_type: "authorization_code",
  });
}

export async function refreshStravaConnection(
  config: StravaConfig,
  connection: StravaConnection,
) {
  return postStravaToken({
    client_id: config.clientId,
    client_secret: config.clientSecret,
    grant_type: "refresh_token",
    refresh_token: connection.refresh_token,
  });
}

export async function getValidStravaAccessToken(
  supabase: SupabaseClient<Database>,
  userId: string,
  config: StravaConfig,
) {
  const { data: connection, error } = await supabase
    .from("strava_connections")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  if (!connection) {
    throw new Error("Connect Strava before syncing activities.");
  }

  const expiresSoon = connection.expires_at * 1000 < Date.now() + 10 * 60 * 1000;

  if (!expiresSoon) {
    return connection.access_token;
  }

  const refreshed = await refreshStravaConnection(config, connection);
  const { error: updateError } = await supabase
    .from("strava_connections")
    .update({
      access_token: refreshed.access_token,
      expires_at: refreshed.expires_at,
      refresh_token: refreshed.refresh_token,
      updated_at: new Date().toISOString(),
    })
    .eq("user_id", userId);

  if (updateError) {
    throw new Error(updateError.message);
  }

  return refreshed.access_token;
}

export async function fetchStravaActivities(accessToken: string) {
  const activities: StravaActivity[] = [];
  const perPage = 100;

  for (let page = 1; page <= 2; page += 1) {
    const url = new URL(STRAVA_ACTIVITIES_URL);
    url.searchParams.set("page", String(page));
    url.searchParams.set("per_page", String(perPage));

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      const body = await response.text();
      throw new Error(
        `Strava activity sync failed (${response.status}). ${body.slice(0, 180)}`,
      );
    }

    const pageActivities = (await response.json()) as StravaActivity[];
    activities.push(...pageActivities);

    if (pageActivities.length < perPage) {
      break;
    }
  }

  return activities;
}

export function mapStravaActivity(
  userId: string,
  activity: StravaActivity,
): ActivityInsert {
  const startDate =
    activity.start_date_local || activity.start_date || new Date().toISOString();
  const name = activity.name?.trim();

  return {
    activity_type: activity.sport_type || activity.type || "Activity",
    avg_hr: activity.average_heartrate ?? null,
    calories: activity.calories ?? null,
    date: startDate.slice(0, 10),
    distance_km:
      typeof activity.distance === "number"
        ? Number((activity.distance / 1000).toFixed(3))
        : null,
    duration_minutes:
      typeof activity.moving_time === "number" ||
      typeof activity.elapsed_time === "number"
        ? Number(
            ((activity.moving_time ?? activity.elapsed_time ?? 0) / 60).toFixed(
              2,
            ),
          )
        : null,
    external_id: String(activity.id),
    max_hr: activity.max_heartrate ?? null,
    notes: name ? `Strava: ${name}` : null,
    source: "strava",
    synced_at: new Date().toISOString(),
    training_effect: null,
    user_id: userId,
  };
}
