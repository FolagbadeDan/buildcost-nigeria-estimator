
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
        { name: "Cement", materialId: "cement", unit: "Bag", quantityPerSqMeter: 0.45, percentageOfPhase: 0.32 },
        { name: "Sand", materialId: "sand", unit: "Ton", quantityPerSqMeter: 0.17, percentageOfPhase: 0.25 },
        { name: "Gravel", materialId: "gravel", unit: "Ton", quantityPerSqMeter: 0.19, percentageOfPhase: 0.23 },
        { name: "Reinforcement Bars", materialId: "reinforcementBars", unit: "Ton", quantityPerSqMeter: 0.016, percentageOfPhase: 0.2 }
      ]
    },
    {
      id: "structure",
      name: "Structure",
      percentageOfTotal: 0.37,
      materials: [
        { name: "Cement", materialId: "cement", unit: "Bag", quantityPerSqMeter: 0.61, percentageOfPhase: 0.29 },
        { name: "Blocks", materialId: "blocks", unit: "Piece", quantityPerSqMeter: 12, percentageOfPhase: 0.42 },
        { name: "Sand", materialId: "sand", unit: "Ton", quantityPerSqMeter: 0.22, percentageOfPhase: 0.13 },
        { name: "Reinforcement Bars", materialId: "reinforcementBars", unit: "Ton", quantityPerSqMeter: 0.017, percentageOfPhase: 0.16 }
      ]
    },
    {
      id: "roofing",
      name: "Roofing",
      percentageOfTotal: 0.17,
      materials: [
        { name: "Roofing Sheets", materialId: "roofingSheets", unit: "Bundle", quantityPerSqMeter: 0.096, percentageOfPhase: 0.48 },
        { name: "Wood", materialId: "wood", unit: "Piece", quantityPerSqMeter: 1.7, percentageOfPhase: 0.23 },
        { name: "Nails and Fasteners", materialId: "nailsFasteners", unit: "Kg", quantityPerSqMeter: 0.18, percentageOfPhase: 0.04 },
        { name: "Ceiling Materials", materialId: "ceilingMaterials", unit: "Sq. Meter", quantityPerSqMeter: 1, percentageOfPhase: 0.25 }
      ]
    },
    {
      id: "finishing",
      name: "Finishing",
      percentageOfTotal: 0.32,
      materials: [
        { name: "Tiles", materialId: "tiles", unit: "Sq. Meter", quantityPerSqMeter: 1, percentageOfPhase: 0.25 },
        { name: "Paint", materialId: "paint", unit: "Liter", quantityPerSqMeter: 0.47, percentageOfPhase: 0.17 },
        { name: "Doors", materialId: "doors", unit: "Piece", quantityPerSqMeter: 0.09, percentageOfPhase: 0.21 },
        { name: "Windows", materialId: "windows", unit: "Piece", quantityPerSqMeter: 0.07, percentageOfPhase: 0.12 },
        { name: "Sanitary Fixtures", materialId: "sanitaryFixtures", unit: "Set", quantityPerSqMeter: 0.022, percentageOfPhase: 0.13 },
        { name: "Electrical Fixtures", materialId: "electricalFixtures", unit: "Point", quantityPerSqMeter: 0.36, percentageOfPhase: 0.12 }
      ]
    }
  ]
};

export default terrace;
