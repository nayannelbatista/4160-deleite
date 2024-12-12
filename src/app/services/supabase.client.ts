import { createClient } from "@supabase/supabase-js";
import { environment } from "../../environments/environment.development";

export const supabase = createClient(
  environment.supabaseUrl, 
  environment.supabaseKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  }
)