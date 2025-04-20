
import { BuildingType } from "../buildingTypes";

const selfContain: BuildingType = {
  id: "self-contain",
  name: "Self Contain",
  description: "Self-contained unit ideal for students or singles, popular in Nigerian cities.",
  baseSqMeters: 30,
  basePrice: 5000000,
  phases: [
    {
      id: "foundation",
      name: "Foundation",
      percentageOfTotal: 0.15,
      materials: [
        { name: "Cement", unit: "Bag", quantityPerSqMeter: 0.13, pricePerUnit: 5000, percentageOfPhase: 0.35 },
        { name: "Sand", unit: "Ton", quantityPerSqMeter: 0.04, pricePerUnit: 15000, percentageOfPhase: 0.23 },
        { name: "Gravel", unit: "Ton", quantityPerSqMeter: 0.05, pricePerUnit: 18000, percentageOfPhase: 0.19 },
        { name: "Reinforcement Bars", unit: "Ton", quantityPerSqMeter: 0.0012, pricePerUnit: 450000, percentageOfPhase: 0.23 }
      ]
    },
    {
      id: "structure",
      name: "Structure",
      percentageOfTotal: 0.41,
      materials: [
        { name: "Cement", unit: "Bag", quantityPerSqMeter: 0.23, pricePerUnit: 5000, percentageOfPhase: 0.35 },
        { name: "Blocks", unit: "Piece", quantityPerSqMeter: 4, pricePerUnit: 400, percentageOfPhase: 0.44 },
        { name: "Sand", unit: "Ton", quantityPerSqMeter: 0.09, pricePerUnit: 15000, percentageOfPhase: 0.10 },
        { name: "Reinforcement Bars", unit: "Ton", quantityPerSqMeter: 0.0015, pricePerUnit: 450000, percentageOfPhase: 0.11 }
      ]
    },
    {
      id: "roofing",
      name: "Roofing",
      percentageOfTotal: 0.11,
      materials: [
        { name: "Roofing Sheets", unit: "Bundle", quantityPerSqMeter: 0.018, pricePerUnit: 80000, percentageOfPhase: 0.6 },
        { name: "Wood", unit: "Piece", quantityPerSqMeter: 0.18, pricePerUnit: 3000, percentageOfPhase: 0.18 },
        { name: "Nails and Fasteners", unit: "Kg", quantityPerSqMeter: 0.014, pricePerUnit: 2000, percentageOfPhase: 0.06 },
        { name: "Ceiling Materials", unit: "Sq. Meter", quantityPerSqMeter: 1, pricePerUnit: 1800, percentageOfPhase: 0.16 }
      ]
    },
    {
      id: "finishing",
      name: "Finishing",
      percentageOfTotal: 0.33,
      materials: [
        { name: "Tiles", unit: "Sq. Meter", quantityPerSqMeter: 1, pricePerUnit: 1800, percentageOfPhase: 0.24 },
        { name: "Paint", unit: "Liter", quantityPerSqMeter: 0.19, pricePerUnit: 1200, percentageOfPhase: 0.21 },
        { name: "Doors", unit: "Piece", quantityPerSqMeter: 0.007, pricePerUnit: 12000, percentageOfPhase: 0.18 },
        { name: "Windows", unit: "Piece", quantityPerSqMeter: 0.0048, pricePerUnit: 10000, percentageOfPhase: 0.14 },
        { name: "Sanitary Fixtures", unit: "Set", quantityPerSqMeter: 0.004, pricePerUnit: 10000, percentageOfPhase: 0.13 },
        { name: "Electrical Fixtures", unit: "Point", quantityPerSqMeter: 0.09, pricePerUnit: 1000, percentageOfPhase: 0.1 }
      ]
    }
  ]
};

export default selfContain;
