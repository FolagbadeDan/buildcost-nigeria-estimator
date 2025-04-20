
export interface QualityLevel {
  id: string;
  name: string;
  priceMultiplier: number;
  description: string;
}

export const qualityLevels: QualityLevel[] = [
  {
    id: "economy",
    name: "Economy",
    priceMultiplier: 0.85,
    description: "Basic finishes and standard materials",
  },
  {
    id: "standard",
    name: "Standard",
    priceMultiplier: 1.0,
    description: "Good quality materials and finishes",
  },
  {
    id: "premium",
    name: "Premium",
    priceMultiplier: 1.3,
    description: "High-end materials and luxury finishes",
  }
];
