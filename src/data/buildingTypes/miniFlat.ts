
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
        { name: "Cement", materialId: "cement", unit: "Bag", quantityPerSqMeter: 0.22, percentageOfPhase: 0.35 },
        { name: "Sand", materialId: "sand", unit: "Ton", quantityPerSqMeter: 0.08, percentageOfPhase: 0.25 },
        { name: "Gravel", materialId: "gravel", unit: "Ton", quantityPerSqMeter: 0.12, percentageOfPhase: 0.2 },
        { name: "Reinforcement Bars", materialId: "reinforcementBars", unit: "Ton", quantityPerSqMeter: 0.005, percentageOfPhase: 0.2 }
      ]
    },
    {
      id: "structure",
      name: "Structure",
      percentageOfTotal: 0.42,
      materials: [
        { name: "Cement", materialId: "cement", unit: "Bag", quantityPerSqMeter: 0.38, percentageOfPhase: 0.33 },
        { name: "Blocks", materialId: "blocks", unit: "Piece", quantityPerSqMeter: 6, percentageOfPhase: 0.4 },
        { name: "Sand", materialId: "sand", unit: "Ton", quantityPerSqMeter: 0.09, percentageOfPhase: 0.17 },
        { name: "Reinforcement Bars", materialId: "reinforcementBars", unit: "Ton", quantityPerSqMeter: 0.005, percentageOfPhase: 0.1 }
      ]
    },
    {
      id: "roofing",
      name: "Roofing",
      percentageOfTotal: 0.10,
      materials: [
        { name: "Roofing Sheets", materialId: "roofingSheets", unit: "Bundle", quantityPerSqMeter: 0.04, percentageOfPhase: 0.5 },
        { name: "Wood", materialId: "wood", unit: "Piece", quantityPerSqMeter: 0.5, percentageOfPhase: 0.27 },
        { name: "Nails and Fasteners", materialId: "nailsFasteners", unit: "Kg", quantityPerSqMeter: 0.04, percentageOfPhase: 0.1 },
        { name: "Ceiling Materials", materialId: "ceilingMaterials", unit: "Sq. Meter", quantityPerSqMeter: 1, percentageOfPhase: 0.13 }
      ]
    },
    {
      id: "finishing",
      name: "Finishing",
      percentageOfTotal: 0.36,
      materials: [
        { name: "Tiles", materialId: "tiles", unit: "Sq. Meter", quantityPerSqMeter: 1, percentageOfPhase: 0.28 },
        { name: "Paint", materialId: "paint", unit: "Liter", quantityPerSqMeter: 0.25, percentageOfPhase: 0.2 },
        { name: "Doors", materialId: "doors", unit: "Piece", quantityPerSqMeter: 0.018, percentageOfPhase: 0.16 },
        { name: "Windows", materialId: "windows", unit: "Piece", quantityPerSqMeter: 0.013, percentageOfPhase: 0.10 },
        { name: "Sanitary Fixtures", materialId: "sanitaryFixtures", unit: "Set", quantityPerSqMeter: 0.006, percentageOfPhase: 0.11 },
        { name: "Electrical Fixtures", materialId: "electricalFixtures", unit: "Point", quantityPerSqMeter: 0.12, percentageOfPhase: 0.15 }
      ]
    }
  ]
};

export default miniFlat;
