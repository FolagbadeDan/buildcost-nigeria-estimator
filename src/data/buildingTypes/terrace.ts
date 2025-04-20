
import { BuildingType } from "../../types/buildingTypes";

const terrace: BuildingType = {
  id: "terrace",
  name: "Terrace",
  description: "Popular urban multiple-in-one housing, shared by several households.",
  baseSqMeters: 150,
  basePrice: 35000000,
  phases: [
    {
      id: "foundation",
      name: "Foundation",
      percentageOfTotal: 0.14,
      materials: [
        { name: "Cement", unit: "Bag", quantityPerSqMeter: 0.45, pricePerUnit: 5000, percentageOfPhase: 0.32 },
        { name: "Sand", unit: "Ton", quantityPerSqMeter: 0.17, pricePerUnit: 15000, percentageOfPhase: 0.25 },
        { name: "Gravel", unit: "Ton", quantityPerSqMeter: 0.19, pricePerUnit: 18000, percentageOfPhase: 0.23 },
        { name: "Reinforcement Bars", unit: "Ton", quantityPerSqMeter: 0.016, pricePerUnit: 450000, percentageOfPhase: 0.2 }
      ]
    },
    {
      id: "structure",
      name: "Structure",
      percentageOfTotal: 0.37,
      materials: [
        { name: "Cement", unit: "Bag", quantityPerSqMeter: 0.61, pricePerUnit: 5000, percentageOfPhase: 0.29 },
        { name: "Blocks", unit: "Piece", quantityPerSqMeter: 12, pricePerUnit: 400, percentageOfPhase: 0.42 },
        { name: "Sand", unit: "Ton", quantityPerSqMeter: 0.22, pricePerUnit: 15000, percentageOfPhase: 0.13 },
        { name: "Reinforcement Bars", unit: "Ton", quantityPerSqMeter: 0.017, pricePerUnit: 450000, percentageOfPhase: 0.16 }
      ]
    },
    {
      id: "roofing",
      name: "Roofing",
      percentageOfTotal: 0.17,
      materials: [
        { name: "Roofing Sheets", unit: "Bundle", quantityPerSqMeter: 0.096, pricePerUnit: 80000, percentageOfPhase: 0.48 },
        { name: "Wood", unit: "Piece", quantityPerSqMeter: 1.7, pricePerUnit: 3000, percentageOfPhase: 0.23 },
        { name: "Nails and Fasteners", unit: "Kg", quantityPerSqMeter: 0.18, pricePerUnit: 2000, percentageOfPhase: 0.04 },
        { name: "Ceiling Materials", unit: "Sq. Meter", quantityPerSqMeter: 1, pricePerUnit: 3500, percentageOfPhase: 0.25 }
      ]
    },
    {
      id: "finishing",
      name: "Finishing",
      percentageOfTotal: 0.32,
      materials: [
        { name: "Tiles", unit: "Sq. Meter", quantityPerSqMeter: 1, pricePerUnit: 5000, percentageOfPhase: 0.25 },
        { name: "Paint", unit: "Liter", quantityPerSqMeter: 0.47, pricePerUnit: 2900, percentageOfPhase: 0.17 },
        { name: "Doors", unit: "Piece", quantityPerSqMeter: 0.09, pricePerUnit: 32500, percentageOfPhase: 0.21 },
        { name: "Windows", unit: "Piece", quantityPerSqMeter: 0.07, pricePerUnit: 37000, percentageOfPhase: 0.12 },
        { name: "Sanitary Fixtures", unit: "Set", quantityPerSqMeter: 0.022, pricePerUnit: 50000, percentageOfPhase: 0.13 },
        { name: "Electrical Fixtures", unit: "Point", quantityPerSqMeter: 0.36, pricePerUnit: 2900, percentageOfPhase: 0.12 }
      ]
    }
  ]
};

export default terrace;
