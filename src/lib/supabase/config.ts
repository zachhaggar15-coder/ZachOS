export type SupabaseConfig = {
  anonKey: string;
  url: string;
};

export function getSupabaseConfig(): SupabaseConfig | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

  if (!url || !anonKey) {
    return null;
  }

  try {
    const parsedUrl = new URL(url);
    const isWebUrl =
      parsedUrl.protocol === "https:" || parsedUrl.protocol === "http:";

    if (!isWebUrl) {
      return null;
    }
  } catch {
    return null;
  }

  if (
    anonKey.length < 20 ||
    ["test", "placeholder", "your-supabase-anon-key"].includes(
      anonKey.toLowerCase(),
    )
  ) {
    return null;
  }

  return { anonKey, url };
}
