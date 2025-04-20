
export interface Material {
  name: string;
  materialId: string; // Reference to the pricing ID
  unit: string;
  quantityPerSqMeter: number;
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
