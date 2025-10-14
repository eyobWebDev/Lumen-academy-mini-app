import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://vukxviibpbnoarqirxin.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1a3h2aWlicGJub2FycWlyeGluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAxMzc1MjgsImV4cCI6MjA3NTcxMzUyOH0.vnqXuyxGn3pVS_mPiJphTUOqqHgzDuaCxWTciPjekuQ"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase