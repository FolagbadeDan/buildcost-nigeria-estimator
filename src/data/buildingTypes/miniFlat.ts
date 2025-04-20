
import { BuildingType } from "../../types/buildingTypes";

const miniFlat: BuildingType = {
  id: "mini-flat",
  name: "Mini Flat",
  description: "Standard self-contained flat with living and sleeping area, kitchen, bathroom.",
  baseSqMeters: 45,
  basePrice: 8000000,
  phases: [
    {
      id: "foundation",
      name: "Foundation",
      percentageOfTotal: 0.12,
      materials: [
        { name: "Cement", unit: "Bag", quantityPerSqMeter: 0.22, pricePerUnit: 5000, percentageOfPhase: 0.35 },
        { name: "Sand", unit: "Ton", quantityPerSqMeter: 0.08, pricePerUnit: 15000, percentageOfPhase: 0.25 },
        { name: "Gravel", unit: "Ton", quantityPerSqMeter: 0.12, pricePerUnit: 18000, percentageOfPhase: 0.2 },
        { name: "Reinforcement Bars", unit: "Ton", quantityPerSqMeter: 0.005, pricePerUnit: 450000, percentageOfPhase: 0.2 }
      ]
    },
    {
      id: "structure",
      name: "Structure",
      percentageOfTotal: 0.42,
      materials: [
        { name: "Cement", unit: "Bag", quantityPerSqMeter: 0.38, pricePerUnit: 5000, percentageOfPhase: 0.33 },
        { name: "Blocks", unit: "Piece", quantityPerSqMeter: 6, pricePerUnit: 400, percentageOfPhase: 0.4 },
        { name: "Sand", unit: "Ton", quantityPerSqMeter: 0.09, pricePerUnit: 15000, percentageOfPhase: 0.17 },
        { name: "Reinforcement Bars", unit: "Ton", quantityPerSqMeter: 0.005, pricePerUnit: 450000, percentageOfPhase: 0.1 }
      ]
    },
    {
      id: "roofing",
      name: "Roofing",
      percentageOfTotal: 0.10,
      materials: [
        { name: "Roofing Sheets", unit: "Bundle", quantityPerSqMeter: 0.04, pricePerUnit: 80000, percentageOfPhase: 0.5 },
        { name: "Wood", unit: "Piece", quantityPerSqMeter: 0.5, pricePerUnit: 3000, percentageOfPhase: 0.27 },
        { name: "Nails and Fasteners", unit: "Kg", quantityPerSqMeter: 0.04, pricePerUnit: 2000, percentageOfPhase: 0.1 },
        { name: "Ceiling Materials", unit: "Sq. Meter", quantityPerSqMeter: 1, pricePerUnit: 2000, percentageOfPhase: 0.13 }
      ]
    },
    {
      id: "finishing",
      name: "Finishing",
      percentageOfTotal: 0.36,
      materials: [
        { name: "Tiles", unit: "Sq. Meter", quantityPerSqMeter: 1, pricePerUnit: 2500, percentageOfPhase: 0.28 },
        { name: "Paint", unit: "Liter", quantityPerSqMeter: 0.25, pricePerUnit: 1800, percentageOfPhase: 0.2 },
        { name: "Doors", unit: "Piece", quantityPerSqMeter: 0.018, pricePerUnit: 18000, percentageOfPhase: 0.16 },
        { name: "Windows", unit: "Piece", quantityPerSqMeter: 0.013, pricePerUnit: 14000, percentageOfPhase: 0.10 },
        { name: "Sanitary Fixtures", unit: "Set", quantityPerSqMeter: 0.006, pricePerUnit: 30000, percentageOfPhase: 0.11 },
        { name: "Electrical Fixtures", unit: "Point", quantityPerSqMeter: 0.12, pricePerUnit: 1800, percentageOfPhase: 0.15 }
      ]
    }
  ]
};

export default miniFlat;
