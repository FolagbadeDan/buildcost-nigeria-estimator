
import { BuildingType } from "../buildingTypes";

const twoBedroomFlat: BuildingType = {
  id: "2-bedroom-flat",
  name: "2 Bedroom Flat",
  description: "Affordable and popular 2-bedroom residential flat commonly found in Nigerian cities.",
  baseSqMeters: 80,
  basePrice: 15000000,
  phases: [
    {
      id: "foundation",
      name: "Foundation",
      percentageOfTotal: 0.13,
      materials: [
        { name: "Cement", unit: "Bag", quantityPerSqMeter: 0.4, pricePerUnit: 5000, percentageOfPhase: 0.35 },
        { name: "Sand", unit: "Ton", quantityPerSqMeter: 0.15, pricePerUnit: 15000, percentageOfPhase: 0.25 },
        { name: "Gravel", unit: "Ton", quantityPerSqMeter: 0.2, pricePerUnit: 18000, percentageOfPhase: 0.2 },
        { name: "Reinforcement Bars", unit: "Ton", quantityPerSqMeter: 0.01, pricePerUnit: 450000, percentageOfPhase: 0.2 }
      ]
    },
    {
      id: "structure",
      name: "Structure",
      percentageOfTotal: 0.40,
      materials: [
        { name: "Cement", unit: "Bag", quantityPerSqMeter: 0.7, pricePerUnit: 5000, percentageOfPhase: 0.3 },
        { name: "Blocks", unit: "Piece", quantityPerSqMeter: 10, pricePerUnit: 400, percentageOfPhase: 0.4 },
        { name: "Sand", unit: "Ton", quantityPerSqMeter: 0.18, pricePerUnit: 15000, percentageOfPhase: 0.15 },
        { name: "Reinforcement Bars", unit: "Ton", quantityPerSqMeter: 0.01, pricePerUnit: 450000, percentageOfPhase: 0.15 }
      ]
    },
    {
      id: "roofing",
      name: "Roofing",
      percentageOfTotal: 0.13,
      materials: [
        { name: "Roofing Sheets", unit: "Bundle", quantityPerSqMeter: 0.08, pricePerUnit: 80000, percentageOfPhase: 0.5 },
        { name: "Wood", unit: "Piece", quantityPerSqMeter: 1.1, pricePerUnit: 3000, percentageOfPhase: 0.25 },
        { name: "Nails and Fasteners", unit: "Kg", quantityPerSqMeter: 0.1, pricePerUnit: 2000, percentageOfPhase: 0.05 },
        { name: "Ceiling Materials", unit: "Sq. Meter", quantityPerSqMeter: 1, pricePerUnit: 3000, percentageOfPhase: 0.2 }
      ]
    },
    {
      id: "finishing",
      name: "Finishing",
      percentageOfTotal: 0.34,
      materials: [
        { name: "Tiles", unit: "Sq. Meter", quantityPerSqMeter: 1, pricePerUnit: 4000, percentageOfPhase: 0.25 },
        { name: "Paint", unit: "Liter", quantityPerSqMeter: 0.5, pricePerUnit: 2500, percentageOfPhase: 0.19 },
        { name: "Doors", unit: "Piece", quantityPerSqMeter: 0.05, pricePerUnit: 25000, percentageOfPhase: 0.18 },
        { name: "Windows", unit: "Piece", quantityPerSqMeter: 0.04, pricePerUnit: 30000, percentageOfPhase: 0.13 },
        { name: "Sanitary Fixtures", unit: "Set", quantityPerSqMeter: 0.014, pricePerUnit: 60000, percentageOfPhase: 0.15 },
        { name: "Electrical Fixtures", unit: "Point", quantityPerSqMeter: 0.2, pricePerUnit: 2500, percentageOfPhase: 0.1 }
      ]
    }
  ]
};

export default twoBedroomFlat;
