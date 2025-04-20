import { BuildingType } from "../../types/buildingTypes";

const threeBedroomBungalow: BuildingType = {
  id: "3-bedroom-bungalow",
  name: "3 Bedroom Bungalow",
  description: "A single-story 3 bedroom residential building with standard amenities",
  baseSqMeters: 120,
  basePrice: 25000000, // 25 million Naira base price
  phases: [
    {
      id: "foundation",
      name: "Foundation",
      percentageOfTotal: 0.15,
      materials: [
        {
          name: "Cement",
          materialId: "cement",
          unit: "Bag",
          quantityPerSqMeter: 0.5,
          percentageOfPhase: 0.3
        },
        {
          name: "Sand",
          materialId: "sand",
          unit: "Ton",
          quantityPerSqMeter: 0.2,
          percentageOfPhase: 0.2
        },
        {
          name: "Gravel",
          materialId: "gravel",
          unit: "Ton",
          quantityPerSqMeter: 0.3,
          percentageOfPhase: 0.3
        },
        {
          name: "Reinforcement Bars",
          materialId: "reinforcementBars",
          unit: "Ton",
          quantityPerSqMeter: 0.02,
          percentageOfPhase: 0.2
        }
      ]
    },
    {
      id: "structure",
      name: "Structure",
      percentageOfTotal: 0.35,
      materials: [
        {
          name: "Cement",
          materialId: "cement",
          unit: "Bag",
          quantityPerSqMeter: 0.8,
          percentageOfPhase: 0.25
        },
        {
          name: "Blocks",
          materialId: "blocks",
          unit: "Piece",
          quantityPerSqMeter: 15,
          percentageOfPhase: 0.35
        },
        {
          name: "Sand",
          materialId: "sand",
          unit: "Ton",
          quantityPerSqMeter: 0.3,
          percentageOfPhase: 0.15
        },
        {
          name: "Reinforcement Bars",
          materialId: "reinforcementBars",
          unit: "Ton",
          quantityPerSqMeter: 0.03,
          percentageOfPhase: 0.25
        }
      ]
    },
    {
      id: "roofing",
      name: "Roofing",
      percentageOfTotal: 0.20,
      materials: [
        {
          name: "Roofing Sheets",
          materialId: "roofingSheets",
          unit: "Bundle",
          quantityPerSqMeter: 0.1,
          percentageOfPhase: 0.45
        },
        {
          name: "Wood",
          materialId: "wood",
          unit: "Piece",
          quantityPerSqMeter: 2,
          percentageOfPhase: 0.30
        },
        {
          name: "Nails and Fasteners",
          materialId: "nailsFasteners",
          unit: "Kg",
          quantityPerSqMeter: 0.2,
          percentageOfPhase: 0.05
        },
        {
          name: "Ceiling Materials",
          materialId: "ceilingMaterials",
          unit: "Sq. Meter",
          quantityPerSqMeter: 1,
          percentageOfPhase: 0.20
        }
      ]
    },
    {
      id: "finishing",
      name: "Finishing",
      percentageOfTotal: 0.30,
      materials: [
        {
          name: "Tiles",
          materialId: "tiles",
          unit: "Sq. Meter",
          quantityPerSqMeter: 1,
          percentageOfPhase: 0.25
        },
        {
          name: "Paint",
          materialId: "paint",
          unit: "Liter",
          quantityPerSqMeter: 0.5,
          percentageOfPhase: 0.20
        },
        {
          name: "Doors",
          materialId: "doors",
          unit: "Piece",
          quantityPerSqMeter: 0.08,
          percentageOfPhase: 0.20
        },
        {
          name: "Windows",
          materialId: "windows",
          unit: "Piece",
          quantityPerSqMeter: 0.05,
          percentageOfPhase: 0.15
        },
        {
          name: "Sanitary Fixtures",
          materialId: "sanitaryFixtures",
          unit: "Set",
          quantityPerSqMeter: 0.025,
          percentageOfPhase: 0.10
        },
        {
          name: "Electrical Fixtures",
          materialId: "electricalFixtures",
          unit: "Point",
          quantityPerSqMeter: 0.4,
          percentageOfPhase: 0.10
        }
      ]
    }
  ]
};

export default threeBedroomBungalow;
