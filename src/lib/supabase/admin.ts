import { createClient } from "@supabase/supabase-js";

import { getSupabaseConfig } from "@/lib/supabase/config";
import type { Database } from "@/lib/supabase/database.types";

export function createSupabaseServiceRoleClient() {
  const config = getSupabaseConfig();
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

  if (!config) {
    throw new Error(
      "Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.",
    );
  }

  if (
    !serviceRoleKey ||
    serviceRoleKey.length < 20 ||
    ["test", "placeholder", "your-supabase-service-role-key"].includes(
      serviceRoleKey.toLowerCase(),
    )
  ) {
    throw new Error(
      "Portfolio price writes are not configured. Add SUPABASE_SERVICE_ROLE_KEY on the server.",
    );
  }

  return createClient<Database>(config.url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
