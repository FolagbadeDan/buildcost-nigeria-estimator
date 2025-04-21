
import { BuildingType } from "../../types/buildingTypes";

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
        { name: "Cement", materialId: "cement", unit: "Bag", quantityPerSqMeter: 0.13, percentageOfPhase: 0.35 },
        { name: "Sand", materialId: "sand", unit: "Ton", quantityPerSqMeter: 0.04, percentageOfPhase: 0.23 },
        { name: "Gravel", materialId: "gravel", unit: "Ton", quantityPerSqMeter: 0.05, percentageOfPhase: 0.19 },
        { name: "Reinforcement Bars", materialId: "reinforcementBars", unit: "Ton", quantityPerSqMeter: 0.0012, percentageOfPhase: 0.23 }
      ]
    },
    {
      id: "structure",
      name: "Structure",
      percentageOfTotal: 0.41,
      materials: [
        { name: "Cement", materialId: "cement", unit: "Bag", quantityPerSqMeter: 0.23, percentageOfPhase: 0.35 },
        { name: "Blocks", materialId: "blocks", unit: "Piece", quantityPerSqMeter: 4, percentageOfPhase: 0.44 },
        { name: "Sand", materialId: "sand", unit: "Ton", quantityPerSqMeter: 0.09, percentageOfPhase: 0.10 },
        { name: "Reinforcement Bars", materialId: "reinforcementBars", unit: "Ton", quantityPerSqMeter: 0.0015, percentageOfPhase: 0.11 }
      ]
    },
    {
      id: "roofing",
      name: "Roofing",
      percentageOfTotal: 0.11,
      materials: [
        { name: "Roofing Sheets", materialId: "roofingSheets", unit: "Bundle", quantityPerSqMeter: 0.018, percentageOfPhase: 0.6 },
        { name: "Wood", materialId: "wood", unit: "Piece", quantityPerSqMeter: 0.18, percentageOfPhase: 0.18 },
        { name: "Nails and Fasteners", materialId: "nailsFasteners", unit: "Kg", quantityPerSqMeter: 0.014, percentageOfPhase: 0.06 },
        { name: "Ceiling Materials", materialId: "ceilingMaterials", unit: "Sq. Meter", quantityPerSqMeter: 1, percentageOfPhase: 0.16 }
      ]
    },
    {
      id: "finishing",
      name: "Finishing",
      percentageOfTotal: 0.33,
      materials: [
        { name: "Tiles", materialId: "tiles", unit: "Sq. Meter", quantityPerSqMeter: 1, percentageOfPhase: 0.24 },
        { name: "Paint", materialId: "paint", unit: "Liter", quantityPerSqMeter: 0.19, percentageOfPhase: 0.21 },
        { name: "Doors", materialId: "doors", unit: "Piece", quantityPerSqMeter: 0.007, percentageOfPhase: 0.18 },
        { name: "Windows", materialId: "windows", unit: "Piece", quantityPerSqMeter: 0.0048, percentageOfPhase: 0.14 },
        { name: "Sanitary Fixtures", materialId: "sanitaryFixtures", unit: "Set", quantityPerSqMeter: 0.004, percentageOfPhase: 0.13 },
        { name: "Electrical Fixtures", materialId: "electricalFixtures", unit: "Point", quantityPerSqMeter: 0.09, percentageOfPhase: 0.1 }
      ]
    }
  ]
};

export default selfContain;
