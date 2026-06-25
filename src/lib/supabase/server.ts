import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

import { getSupabaseConfig } from "@/lib/supabase/config";
import type { Database } from "@/lib/supabase/database.types";

type MutableCookieStore = Awaited<ReturnType<typeof cookies>> & {
  set: (name: string, value: string, options?: CookieOptions) => void;
};

export async function createSupabaseServerClient() {
  const config = getSupabaseConfig();

  if (!config) {
    throw new Error(
      "Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.",
    );
  }

  const cookieStore = await cookies();

  return createServerClient<Database>(config.url, config.anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          const mutableCookieStore = cookieStore as MutableCookieStore;
          cookiesToSet.forEach(({ name, options, value }) => {
            mutableCookieStore.set(name, value, options);
          });
        } catch {
          // Server Components cannot always write cookies. Server Actions can.
        }
      },
    },
  });
}

