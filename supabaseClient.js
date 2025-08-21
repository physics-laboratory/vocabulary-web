// supabaseClient.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = "https://kuzzbvqgujfmfzmybmve.supabase.co";     // <-- thay
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1enpidnFndWpmbWZ6bXlibXZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NjM5NDIsImV4cCI6MjA3MTMzOTk0Mn0.57OCv_PKlp96qunrirekCwTaaVOb3YBb-2dgJXWmP4s";           // <-- thay

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
