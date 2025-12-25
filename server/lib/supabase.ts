import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Check if Supabase is properly configured
const isSupabaseConfigured = supabaseUrl && supabaseServiceKey &&
  supabaseUrl !== 'your_supabase_project_url' &&
  supabaseServiceKey !== 'your_supabase_service_role_key'

if (!isSupabaseConfigured) {
  console.warn('⚠️  Supabase not configured. Please set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your .env file.')
}

// Create a mock client if not configured, or the real client if configured
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })
  : null as any // Mock client for development

// Database types
export interface Property {
  id?: number
  title: string
  price: string
  image: string
  beds: number
  baths: number
  size: string
  area: string
  city: 'dubai' | 'abu-dhabi' | 'al-ain'
  created_at?: string
  updated_at?: string
}