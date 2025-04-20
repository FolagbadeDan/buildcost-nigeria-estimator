import { BuildingType } from "../buildingTypes";

const fiveBedroomDuplex: BuildingType = {
  id: "5-bedroom-duplex",
  name: "5 Bedroom Duplex",
  description: "A two-story 5 bedroom residential building with modern amenities",
  baseSqMeters: 250,
  basePrice: 60000000,
  phases: [
    {
      id: "foundation",
      name: "Foundation",
      percentageOfTotal: 0.15,
      materials: [
        {
          name: "Cement",
          unit: "Bag",
          quantityPerSqMeter: 0.6,
          pricePerUnit: 5000,
          percentageOfPhase: 0.3
        },
        {
          name: "Sand",
          unit: "Ton",
          quantityPerSqMeter: 0.25,
          pricePerUnit: 15000,
          percentageOfPhase: 0.2
        },
        {
          name: "Gravel",
          unit: "Ton",
          quantityPerSqMeter: 0.35,
          pricePerUnit: 18000,
          percentageOfPhase: 0.3
        },
        {
          name: "Reinforcement Bars",
          unit: "Ton",
          quantityPerSqMeter: 0.03,
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
          quantityPerSqMeter: 0.9,
          pricePerUnit: 5000,
          percentageOfPhase: 0.25
        },
        {
          name: "Blocks",
          unit: "Piece",
          quantityPerSqMeter: 18,
          pricePerUnit: 400,
          percentageOfPhase: 0.35
        },
        {
          name: "Sand",
          unit: "Ton",
          quantityPerSqMeter: 0.35,
          pricePerUnit: 15000,
          percentageOfPhase: 0.15
        },
        {
          name: "Reinforcement Bars",
          unit: "Ton",
          quantityPerSqMeter: 0.04,
          pricePerUnit: 450000,
          percentageOfPhase: 0.25
        }
      ]
    },
    {
      id: "roofing",
      name: "Roofing",
      percentageOfTotal: 0.15,
      materials: [
        {
          name: "Roofing Sheets",
          unit: "Bundle",
          quantityPerSqMeter: 0.12,
          pricePerUnit: 80000,
          percentageOfPhase: 0.45
        },
        {
          name: "Wood",
          unit: "Piece",
          quantityPerSqMeter: 2.5,
          pricePerUnit: 3000,
          percentageOfPhase: 0.30
        },
        {
          name: "Nails and Fasteners",
          unit: "Kg",
          quantityPerSqMeter: 0.25,
          pricePerUnit: 2000,
          percentageOfPhase: 0.05
        },
        {
          name: "Ceiling Materials",
          unit: "Sq. Meter",
          quantityPerSqMeter: 1,
          pricePerUnit: 4000,
          percentageOfPhase: 0.20
        }
      ]
    },
    {
      id: "finishing",
      name: "Finishing",
      percentageOfTotal: 0.35,
      materials: [
        {
          name: "Tiles",
          unit: "Sq. Meter",
          quantityPerSqMeter: 1,
          pricePerUnit: 5500,
          percentageOfPhase: 0.25
        },
        {
          name: "Paint",
          unit: "Liter",
          quantityPerSqMeter: 0.6,
          pricePerUnit: 3500,
          percentageOfPhase: 0.20
        },
        {
          name: "Doors",
          unit: "Piece",
          quantityPerSqMeter: 0.1,
          pricePerUnit: 45000,
          percentageOfPhase: 0.20
        },
        {
          name: "Windows",
          unit: "Piece",
          quantityPerSqMeter: 0.06,
          pricePerUnit: 60000,
          percentageOfPhase: 0.15
        },
        {
          name: "Sanitary Fixtures",
          unit: "Set",
          quantityPerSqMeter: 0.035,
          pricePerUnit: 120000,
          percentageOfPhase: 0.10
        },
        {
          name: "Electrical Fixtures",
          unit: "Point",
          quantityPerSqMeter: 0.5,
          pricePerUnit: 4000,
          percentageOfPhase: 0.10
        }
      ]
    }
  ]
};

export default fiveBedroomDuplex;
