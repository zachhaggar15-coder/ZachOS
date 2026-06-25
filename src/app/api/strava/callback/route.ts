import { NextRequest, NextResponse } from "next/server";

import {
  athleteName,
  exchangeStravaCode,
  getStravaConfig,
} from "@/lib/strava";
import { createSupabaseServerClient } from "@/lib/supabase/server";

function redirectWithMessage(origin: string, key: "error" | "message", value: string) {
  return NextResponse.redirect(
    new URL(`/integrations?${key}=${encodeURIComponent(value)}`, origin),
  );
}

export async function GET(request: NextRequest) {
  const origin = request.nextUrl.origin;
  const params = request.nextUrl.searchParams;
  const code = params.get("code");
  const state = params.get("state");
  const scope = params.get("scope");
  const expectedState = request.cookies.get("strava_oauth_state")?.value;

  if (!code || !state || !expectedState || state !== expectedState) {
    return redirectWithMessage(
      origin,
      "error",
      "Strava connection could not be verified. Please try connecting again.",
    );
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirectWithMessage(
      origin,
      "error",
      "Sign in before completing Strava connection.",
    );
  }

  const config = getStravaConfig(origin);

  if (!config) {
    return redirectWithMessage(
      origin,
      "error",
      "Strava is not configured on the server.",
    );
  }

  try {
    const token = await exchangeStravaCode(config, code);
    const { error } = await supabase.from("strava_connections").upsert(
      {
        access_token: token.access_token,
        athlete_id: token.athlete?.id ?? null,
        athlete_name: athleteName(token),
        expires_at: token.expires_at,
        refresh_token: token.refresh_token,
        scope,
        updated_at: new Date().toISOString(),
        user_id: user.id,
      },
      { onConflict: "user_id" },
    );

    if (error) {
      throw new Error(error.message);
    }

    const response = redirectWithMessage(
      origin,
      "message",
      "Strava connected. You can sync activities now.",
    );
    response.cookies.delete("strava_oauth_state");
    return response;
  } catch (error) {
    return redirectWithMessage(
      origin,
      "error",
      error instanceof Error
        ? error.message
        : "Could not complete Strava connection.",
    );
  }
}
