import { createClient } from '@supabase/supabase-js'

// Add these guards so you catch the problem immediately
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log('SUPABASE INIT:', { 
  hasUrl: !!supabaseUrl, 
  hasKey: !!supabaseAnonKey,
  keyPrefix: supabaseAnonKey?.slice(0, 15)
})
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase env variables — check NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)