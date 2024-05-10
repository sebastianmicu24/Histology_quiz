import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://jloszpuyzepfhfujnrnu.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impsb3N6cHV5emVwZmhmdWpucm51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1MzA0ODcsImV4cCI6MjAyOTEwNjQ4N30.GzObLdluO3rm0LDOuFovjyeA-hLFzREKKuvKjP-E0ks')