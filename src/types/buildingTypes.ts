
export interface Material {
  name: string;
  unit: string;
  quantityPerSqMeter: number;
  pricePerUnit: number;
  percentageOfPhase: number;
}

export interface Phase {
  id: string;
  name: string;
  percentageOfTotal: number;
  materials: Material[];
}

export interface BuildingType {
  id: string;
  name: string;
  description: string;
  baseSqMeters: number;
  basePrice: number;
  phases: Phase[];
}
