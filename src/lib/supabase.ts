import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Category {
  id: string;
  name: string;
  name_en?: string;
  description: string;
  description_en?: string;
  base_price: number;
  features: string[];
  features_en?: string[];
  created_at: string;
}

export interface Driver {
  id: string;
  name: string;
  phone: string;
  license_number: string;
  vehicle_type: string;
  vehicle_plate: string;
  rating: number;
  is_available: boolean;
  created_at: string;
}

export interface Booking {
  id?: string;
  customer_name: string;
  customer_phone: string;
  pickup_location: string;
  dropoff_location: string;
  category: string;
  pickup_date: string;
  status?: string;
  notes?: string;
  created_at?: string;
}
