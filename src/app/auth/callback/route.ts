import { NextRequest, NextResponse } from "next/server";

import { createSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const redirectTo = getSafeRedirectUrl(requestUrl);

  if (!code) {
    redirectTo.searchParams.set("error", "Missing sign-in code.");
    return NextResponse.redirect(redirectTo);
  }

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    redirectTo.pathname = "/";
    redirectTo.searchParams.set("error", error.message);
    return NextResponse.redirect(redirectTo);
  }

  return NextResponse.redirect(redirectTo);
}

function getSafeRedirectUrl(requestUrl: URL) {
  const next = requestUrl.searchParams.get("next");
  const fallback = new URL("/", requestUrl.origin);

  if (!next || !next.startsWith("/") || next.startsWith("//")) {
    return fallback;
  }

  const redirectTo = new URL(next, requestUrl.origin);
  return redirectTo.origin === requestUrl.origin ? redirectTo : fallback;
}
