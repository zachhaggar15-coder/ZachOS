import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";

import { buildStravaAuthorizeUrl, getStravaConfig } from "@/lib/strava";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const origin = request.nextUrl.origin;

  if (!user) {
    return NextResponse.redirect(
      new URL("/?error=Sign%20in%20before%20connecting%20Strava.", origin),
    );
  }

  const config = getStravaConfig(origin);

  if (!config) {
    return NextResponse.redirect(
      new URL(
        "/integrations?error=Add%20STRAVA_CLIENT_ID,%20STRAVA_CLIENT_SECRET%20and%20STRAVA_REDIRECT_URI%20first.",
        origin,
      ),
    );
  }

  const state = randomUUID();
  const response = NextResponse.redirect(buildStravaAuthorizeUrl(config, state));
  response.cookies.set("strava_oauth_state", state, {
    httpOnly: true,
    maxAge: 600,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return response;
}
