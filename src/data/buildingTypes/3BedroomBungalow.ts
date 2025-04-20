import { BuildingType } from "../buildingTypes";

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
          unit: "Bag",
          quantityPerSqMeter: 0.5,
          pricePerUnit: 5000,
          percentageOfPhase: 0.3
        },
        {
          name: "Sand",
          unit: "Ton",
          quantityPerSqMeter: 0.2,
          pricePerUnit: 15000,
          percentageOfPhase: 0.2
        },
        {
          name: "Gravel",
          unit: "Ton",
          quantityPerSqMeter: 0.3,
          pricePerUnit: 18000,
          percentageOfPhase: 0.3
        },
        {
          name: "Reinforcement Bars",
          unit: "Ton",
          quantityPerSqMeter: 0.02,
          pricePerUnit: 450000,
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
          unit: "Bag",
          quantityPerSqMeter: 0.8,
          pricePerUnit: 5000,
          percentageOfPhase: 0.25
        },
        {
          name: "Blocks",
          unit: "Piece",
          quantityPerSqMeter: 15,
          pricePerUnit: 400,
          percentageOfPhase: 0.35
        },
        {
          name: "Sand",
          unit: "Ton",
          quantityPerSqMeter: 0.3,
          pricePerUnit: 15000,
          percentageOfPhase: 0.15
        },
        {
          name: "Reinforcement Bars",
          unit: "Ton",
          quantityPerSqMeter: 0.03,
          pricePerUnit: 450000,
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
          unit: "Bundle",
          quantityPerSqMeter: 0.1,
          pricePerUnit: 80000,
          percentageOfPhase: 0.45
        },
        {
          name: "Wood",
          unit: "Piece",
          quantityPerSqMeter: 2,
          pricePerUnit: 3000,
          percentageOfPhase: 0.30
        },
        {
          name: "Nails and Fasteners",
          unit: "Kg",
          quantityPerSqMeter: 0.2,
          pricePerUnit: 2000,
          percentageOfPhase: 0.05
        },
        {
          name: "Ceiling Materials",
          unit: "Sq. Meter",
          quantityPerSqMeter: 1,
          pricePerUnit: 3500,
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
          unit: "Sq. Meter",
          quantityPerSqMeter: 1,
          pricePerUnit: 4500,
          percentageOfPhase: 0.25
        },
        {
          name: "Paint",
          unit: "Liter",
          quantityPerSqMeter: 0.5,
          pricePerUnit: 3000,
          percentageOfPhase: 0.20
        },
        {
          name: "Doors",
          unit: "Piece",
          quantityPerSqMeter: 0.08,
          pricePerUnit: 35000,
          percentageOfPhase: 0.20
        },
        {
          name: "Windows",
          unit: "Piece",
          quantityPerSqMeter: 0.05,
          pricePerUnit: 45000,
          percentageOfPhase: 0.15
        },
        {
          name: "Sanitary Fixtures",
          unit: "Set",
          quantityPerSqMeter: 0.025,
          pricePerUnit: 80000,
          percentageOfPhase: 0.10
        },
        {
          name: "Electrical Fixtures",
          unit: "Point",
          quantityPerSqMeter: 0.4,
          pricePerUnit: 3500,
          percentageOfPhase: 0.10
        }
      ]
    }
  ]
};

export default threeBedroomBungalow;
