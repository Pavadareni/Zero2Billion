import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hkubuoeipvcnmkgsdnao.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhrdWJ1b2VpcHZjbm1rZ3NkbmFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2OTIwNzcsImV4cCI6MjAzNDI2ODA3N30.ryWMJdf9iVXgt0zUyLXCxpFVWDZtLkonDlHzt6M7wUk'
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;