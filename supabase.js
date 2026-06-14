const SUPABASE_URL = "https://gqqtpsmnafoiaaklxkzt.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxcXRwc21uYWZvaWFha2x4a3p0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNjQ2MTUsImV4cCI6MjA5Njk0MDYxNX0.eXjYJEdz6ndJZPFhTbC9kurVRUX6iBC8k6J_qUSYmHM";

const supabaseClient =
    supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );
