import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/database'

// Client-side Supabase client (for browser)
export const supabase = createClientComponentClient<Database>()

// Server-side Supabase client with service role (for API routes)
export const supabaseAdmin = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)

// Helper function to get current user
export async function getCurrentUser() {
  const { data: { user }, error } = await supabase.auth.getUser()
  if (error) throw error
  return user
}

// Helper function to get user profile
export async function getUserProfile(userId: string) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('auth_user_id', userId)
    .single()
  
  if (error) throw error
  return data
}

// Helper function to check if user is super admin
export async function isSuperAdmin(userId: string) {
  const { data, error } = await supabase
    .from('users')
    .select('is_super_admin')
    .eq('auth_user_id', userId)
    .single()
  
  if (error) return false
  return data?.is_super_admin || false
}
