
export interface Location {
  id: string;
  name: string;
  priceMultiplier: number;
}

export const locations: Location[] = [
  {
    id: "lagos",
    name: "Lagos",
    priceMultiplier: 1.0,
  },
  {
    id: "abuja",
    name: "Abuja",
    priceMultiplier: 1.05,
  },
  {
    id: "port-harcourt",
    name: "Port Harcourt",
    priceMultiplier: 0.95,
  }
];
