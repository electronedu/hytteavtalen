export type UserRole = 'owner' | 'renter' | 'admin';

export interface UserProfile {
  id: string;
  email: string;
  role: UserRole;
  full_name: string;
  phone_number: string;
  created_at: string;
  updated_at: string;
}

export interface CabinListing {
  id: string;
  owner_id: string;
  title: string;
  description: string;
  location: {
    address: string;
    latitude: number;
    longitude: number;
  };
  amenities: string[];
  images: string[];
  price_per_night: number;
  cleaning_fee: number;
  available_dates: DateRange[];
  rules: string[];
  status: 'active' | 'inactive' | 'pending';
  created_at: string;
  updated_at: string;
}

export interface DateRange {
  start_date: string;
  end_date: string;
}

export interface RentalApplication {
  id: string;
  cabin_id: string;
  renter_id: string;
  status: 'pending' | 'approved' | 'rejected';
  desired_dates: DateRange;
  message: string;
  video_url?: string;
  created_at: string;
  updated_at: string;
}

export interface RentalContract {
  id: string;
  cabin_id: string;
  owner_id: string;
  renter_id: string;
  start_date: string;
  end_date: string;
  total_price: number;
  status: 'draft' | 'signed' | 'active' | 'completed' | 'cancelled';
  terms_accepted: boolean;
  signature_owner?: string;
  signature_renter?: string;
  created_at: string;
  updated_at: string;
}

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: UserProfile;
        Insert: Omit<UserProfile, 'created_at' | 'updated_at'>;
        Update: Partial<Omit<UserProfile, 'id' | 'created_at' | 'updated_at'>>;
      };
      cabins: {
        Row: CabinListing;
        Insert: Omit<CabinListing, 'created_at' | 'updated_at'>;
        Update: Partial<Omit<CabinListing, 'id' | 'created_at' | 'updated_at'>>;
      };
      applications: {
        Row: RentalApplication;
        Insert: Omit<RentalApplication, 'created_at' | 'updated_at'>;
        Update: Partial<Omit<RentalApplication, 'id' | 'created_at' | 'updated_at'>>;
      };
      contracts: {
        Row: RentalContract;
        Insert: Omit<RentalContract, 'created_at' | 'updated_at'>;
        Update: Partial<Omit<RentalContract, 'id' | 'created_at' | 'updated_at'>>;
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}; 