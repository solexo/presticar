// Mock Supabase client for static website
export const supabase = {
  from: (table: string) => ({
    select: (columns: string) => ({
      order: (column: string, options: any) => Promise.resolve({
        data: getMockCategories(),
        error: null
      })
    }),
    insert: (data: any) => Promise.resolve({
      data: null,
      error: null
    })
  })
};

// Mock data for categories
function getMockCategories() {
  return [
    {
      id: '1',
      name: 'Berline Confort',
      name_en: 'Comfort Sedan',
      description: 'Véhicule confortable pour vos déplacements quotidiens',
      description_en: 'Comfortable vehicle for your daily travels',
      base_price: 0,
      features: [
        'Climatisation',
        'Sièges confortables',
        'Chauffeur professionnel',
        'WiFi gratuit'
      ],
      features_en: [
        'Air conditioning',
        'Comfortable seats',
        'Professional driver',
        'Free WiFi'
      ],
      created_at: new Date().toISOString()
    },
    {
      id: '2',
      name: 'Van Premium',
      name_en: 'Premium Van',
      description: 'Véhicule spacieux pour groupes et bagages (4-7 passagers)',
      description_en: 'Spacious vehicle for groups and luggage (4-7 passengers)',
      base_price: 0,
      features: [
        'Espace généreux',
        'Porte-bagages spacieux',
        'Climatisation',
        'Chauffeur expérimenté'
      ],
      features_en: [
        'Generous space',
        'Spacious luggage compartment',
        'Air conditioning',
        'Experienced driver'
      ],
      created_at: new Date().toISOString()
    },
    {
      id: '3',
      name: 'Luxe Business',
      name_en: 'Business Luxury',
      description: 'Véhicule de luxe avec chauffeur professionnel',
      description_en: 'Luxury vehicle with professional driver',
      base_price: 0,
      features: [
        'Véhicule haut de gamme',
        'Chauffeur en uniforme',
        'Service personnalisé',
        'Équipements premium'
      ],
      features_en: [
        'High-end vehicle',
        'Uniformed driver',
        'Personalized service',
        'Premium equipment'
      ],
      created_at: new Date().toISOString()
    }
  ];
}

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
