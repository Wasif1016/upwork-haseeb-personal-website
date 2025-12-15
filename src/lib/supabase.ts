import { createClient } from '@supabase/supabase-js';

let supabaseClientInstance: ReturnType<typeof createClient> | null = null;

function getSupabaseClient() {
  if (supabaseClientInstance) {
    return supabaseClientInstance;
  }
  
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  // During build or if env vars are missing, use placeholder values
  // This allows the build to complete successfully
  if (!url || !key) {
    // Create a placeholder client that won't throw during build
    supabaseClientInstance = createClient(
      'https://placeholder.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0'
    ) as any;
    return supabaseClientInstance;
  }
  
  supabaseClientInstance = createClient(url, key);
  return supabaseClientInstance;
}

// Export a proxy that lazily initializes the client
export const supabaseClient = new Proxy({} as ReturnType<typeof createClient>, {
  get(_target, prop) {
    const client = getSupabaseClient();
    if (!client) {
      throw new Error('Supabase client not initialized');
    }
    const value = client[prop as keyof ReturnType<typeof createClient>];
    if (typeof value === 'function') {
      return value.bind(client);
    }
    return value;
  }
}); 