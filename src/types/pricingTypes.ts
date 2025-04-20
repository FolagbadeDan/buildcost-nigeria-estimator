
export interface MaterialPricing {
  id: string;
  name: string;
  unit: string;
  basePrice: number;
  lastUpdated: string; // ISO date string
}

export interface LaborPricing {
  id: string;
  category: string;
  description: string;
  unit: string; // e.g., "per day", "per sqm"
  basePrice: number;
  lastUpdated: string;
}

export interface PricingData {
  materials: Record<string, MaterialPricing>;
  labor: Record<string, LaborPricing>;
  lastFullUpdate: string;
  region: string; // Default region
}
