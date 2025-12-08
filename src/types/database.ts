export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      tenants: {
        Row: {
          id: string
          clinic_name: string
          clinic_type: string
          subdomain: string | null
          email: string
          phone: string | null
          address: string | null
          city: string | null
          state: string | null
          pincode: string | null
          subscription_plan: string
          subscription_status: string
          trial_ends_at: string | null
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          clinic_name: string
          email: string
          subscription_plan?: string
          subscription_status?: string
        }
        Update: {
          clinic_name?: string
          email?: string
          subscription_plan?: string
          subscription_status?: string
        }
      }
      users: {
        Row: {
          id: string
          tenant_id: string
          auth_user_id: string
          email: string
          full_name: string
          role: string
          is_super_admin: boolean
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          tenant_id: string
          auth_user_id: string
          email: string
          full_name: string
          role: string
        }
        Update: {
          full_name?: string
          role?: string
          is_active?: boolean
        }
      }
      patients: {
        Row: {
          id: string
          tenant_id: string
          patient_number: string
          full_name: string
          date_of_birth: string | null
          gender: string | null
          phone: string | null
          email: string | null
          address: string | null
          blood_group: string | null
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          tenant_id: string
          full_name: string
          phone?: string
        }
        Update: {
          full_name?: string
          phone?: string
          email?: string
        }
      }
      prescriptions: {
        Row: {
          id: string
          tenant_id: string
          patient_id: string
          doctor_id: string
          prescription_number: string
          diagnosis: string
          medicines: Json
          ai_generated: boolean
          status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          tenant_id: string
          patient_id: string
          doctor_id: string
          diagnosis: string
          medicines: Json
        }
        Update: {
          diagnosis?: string
          medicines?: Json
          status?: string
        }
      }
      appointments: {
        Row: {
          id: string
          tenant_id: string
          patient_id: string
          doctor_id: string
          appointment_number: string
          appointment_date: string
          appointment_time: string
          status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          tenant_id: string
          patient_id: string
          doctor_id: string
          appointment_date: string
          appointment_time: string
        }
        Update: {
          appointment_date?: string
          appointment_time?: string
          status?: string
        }
      }
      medicines: {
        Row: {
          id: string
          generic_name: string
          brand_names: string[]
          strength: string | null
          form: string | null
          schedule: string | null
          mrp: number | null
          is_active: boolean
          created_at: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      user_has_permission: {
        Args: {
          p_user_id: string
          p_permission_key: string
        }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
}
