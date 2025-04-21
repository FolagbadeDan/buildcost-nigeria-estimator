
import { BuildingType } from "../../types/buildingTypes";

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
        { name: "Cement", materialId: "cement", unit: "Bag", quantityPerSqMeter: 0.4, percentageOfPhase: 0.35 },
        { name: "Sand", materialId: "sand", unit: "Ton", quantityPerSqMeter: 0.15, percentageOfPhase: 0.25 },
        { name: "Gravel", materialId: "gravel", unit: "Ton", quantityPerSqMeter: 0.2, percentageOfPhase: 0.2 },
        { name: "Reinforcement Bars", materialId: "reinforcementBars", unit: "Ton", quantityPerSqMeter: 0.01, percentageOfPhase: 0.2 }
      ]
    },
    {
      id: "structure",
      name: "Structure",
      percentageOfTotal: 0.40,
      materials: [
        { name: "Cement", materialId: "cement", unit: "Bag", quantityPerSqMeter: 0.7, percentageOfPhase: 0.3 },
        { name: "Blocks", materialId: "blocks", unit: "Piece", quantityPerSqMeter: 10, percentageOfPhase: 0.4 },
        { name: "Sand", materialId: "sand", unit: "Ton", quantityPerSqMeter: 0.18, percentageOfPhase: 0.15 },
        { name: "Reinforcement Bars", materialId: "reinforcementBars", unit: "Ton", quantityPerSqMeter: 0.01, percentageOfPhase: 0.15 }
      ]
    },
    {
      id: "roofing",
      name: "Roofing",
      percentageOfTotal: 0.13,
      materials: [
        { name: "Roofing Sheets", materialId: "roofingSheets", unit: "Bundle", quantityPerSqMeter: 0.08, percentageOfPhase: 0.5 },
        { name: "Wood", materialId: "wood", unit: "Piece", quantityPerSqMeter: 1.1, percentageOfPhase: 0.25 },
        { name: "Nails and Fasteners", materialId: "nailsFasteners", unit: "Kg", quantityPerSqMeter: 0.1, percentageOfPhase: 0.05 },
        { name: "Ceiling Materials", materialId: "ceilingMaterials", unit: "Sq. Meter", quantityPerSqMeter: 1, percentageOfPhase: 0.2 }
      ]
    },
    {
      id: "finishing",
      name: "Finishing",
      percentageOfTotal: 0.34,
      materials: [
        { name: "Tiles", materialId: "tiles", unit: "Sq. Meter", quantityPerSqMeter: 1, percentageOfPhase: 0.25 },
        { name: "Paint", materialId: "paint", unit: "Liter", quantityPerSqMeter: 0.5, percentageOfPhase: 0.19 },
        { name: "Doors", materialId: "doors", unit: "Piece", quantityPerSqMeter: 0.05, percentageOfPhase: 0.18 },
        { name: "Windows", materialId: "windows", unit: "Piece", quantityPerSqMeter: 0.04, percentageOfPhase: 0.13 },
        { name: "Sanitary Fixtures", materialId: "sanitaryFixtures", unit: "Set", quantityPerSqMeter: 0.014, percentageOfPhase: 0.15 },
        { name: "Electrical Fixtures", materialId: "electricalFixtures", unit: "Point", quantityPerSqMeter: 0.2, percentageOfPhase: 0.1 }
      ]
    }
  ]
};

export default twoBedroomFlat;
