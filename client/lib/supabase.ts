import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Check if Supabase is properly configured
const isSupabaseConfigured = supabaseUrl && supabaseAnonKey &&
  supabaseUrl !== 'your_supabase_project_url' &&
  supabaseAnonKey !== 'your_supabase_anon_key'

if (!isSupabaseConfigured) {
  console.warn('⚠️  Supabase not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.')
}

// Create a mock client if not configured, or the real client if configured
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null as any // Mock client for development

// Database types
export interface Property {
  id: number
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