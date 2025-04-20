
import { PricingData } from "../types/pricingTypes";

// Centralized pricing data for all materials and labor
const pricing: PricingData = {
  lastFullUpdate: "2025-04-20",
  region: "Lagos",
  materials: {
    cement: {
      id: "cement",
      name: "Cement",
      unit: "Bag",
      basePrice: 5000,
      lastUpdated: "2025-04-20"
    },
    sand: {
      id: "sand",
      name: "Sand",
      unit: "Ton",
      basePrice: 15000,
      lastUpdated: "2025-04-20"
    },
    gravel: {
      id: "gravel",
      name: "Gravel",
      unit: "Ton",
      basePrice: 18000,
      lastUpdated: "2025-04-20"
    },
    reinforcementBars: {
      id: "reinforcementBars",
      name: "Reinforcement Bars",
      unit: "Ton",
      basePrice: 450000,
      lastUpdated: "2025-04-20"
    },
    blocks: {
      id: "blocks",
      name: "Blocks",
      unit: "Piece",
      basePrice: 400,
      lastUpdated: "2025-04-20"
    },
    roofingSheets: {
      id: "roofingSheets",
      name: "Roofing Sheets",
      unit: "Bundle",
      basePrice: 80000,
      lastUpdated: "2025-04-20"
    },
    wood: {
      id: "wood",
      name: "Wood",
      unit: "Piece",
      basePrice: 3000,
      lastUpdated: "2025-04-20"
    },
    nailsFasteners: {
      id: "nailsFasteners",
      name: "Nails and Fasteners",
      unit: "Kg",
      basePrice: 2000,
      lastUpdated: "2025-04-20"
    },
    ceilingMaterials: {
      id: "ceilingMaterials",
      name: "Ceiling Materials",
      unit: "Sq. Meter",
      basePrice: 3500,
      lastUpdated: "2025-04-20"
    },
    tiles: {
      id: "tiles",
      name: "Tiles",
      unit: "Sq. Meter",
      basePrice: 5000,
      lastUpdated: "2025-04-20"
    },
    paint: {
      id: "paint",
      name: "Paint",
      unit: "Liter",
      basePrice: 3000,
      lastUpdated: "2025-04-20"
    },
    doors: {
      id: "doors",
      name: "Doors",
      unit: "Piece",
      basePrice: 35000,
      lastUpdated: "2025-04-20"
    },
    windows: {
      id: "windows",
      name: "Windows",
      unit: "Piece",
      basePrice: 45000,
      lastUpdated: "2025-04-20"
    },
    sanitaryFixtures: {
      id: "sanitaryFixtures",
      name: "Sanitary Fixtures",
      unit: "Set",
      basePrice: 80000,
      lastUpdated: "2025-04-20"
    },
    electricalFixtures: {
      id: "electricalFixtures",
      name: "Electrical Fixtures",
      unit: "Point",
      basePrice: 3500,
      lastUpdated: "2025-04-20"
    }
  },
  labor: {
    foundation: {
      id: "foundation",
      category: "Foundation",
      description: "Foundation laying work",
      unit: "per sqm",
      basePrice: 2500,
      lastUpdated: "2025-04-20"
    },
    bricklaying: {
      id: "bricklaying",
      category: "Structure",
      description: "Bricklaying and structural work",
      unit: "per sqm",
      basePrice: 3000,
      lastUpdated: "2025-04-20"
    },
    roofing: {
      id: "roofing",
      category: "Roofing",
      description: "Roofing installation",
      unit: "per sqm",
      basePrice: 2000,
      lastUpdated: "2025-04-20"
    },
    tiling: {
      id: "tiling",
      category: "Finishing",
      description: "Tiling work",
      unit: "per sqm",
      basePrice: 1800,
      lastUpdated: "2025-04-20"
    },
    painting: {
      id: "painting",
      category: "Finishing",
      description: "Painting work",
      unit: "per sqm",
      basePrice: 1500,
      lastUpdated: "2025-04-20"
    },
    plumbing: {
      id: "plumbing",
      category: "Finishing",
      description: "Plumbing installation",
      unit: "per point",
      basePrice: 8000,
      lastUpdated: "2025-04-20"
    },
    electrical: {
      id: "electrical",
      category: "Finishing",
      description: "Electrical installation",
      unit: "per point",
      basePrice: 5000,
      lastUpdated: "2025-04-20"
    }
  }
};

// Function to get material price by ID
export const getMaterialPrice = (id: string): number => {
  return pricing.materials[id]?.basePrice || 0;
};

// Function to get labor price by ID
export const getLaborPrice = (id: string): number => {
  return pricing.labor[id]?.basePrice || 0;
};

// Function to update material price
export const updateMaterialPrice = (id: string, newPrice: number): void => {
  if (pricing.materials[id]) {
    pricing.materials[id].basePrice = newPrice;
    pricing.materials[id].lastUpdated = new Date().toISOString();
  }
};

// Function to update labor price
export const updateLaborPrice = (id: string, newPrice: number): void => {
  if (pricing.labor[id]) {
    pricing.labor[id].basePrice = newPrice;
    pricing.labor[id].lastUpdated = new Date().toISOString();
  }
};

// Function to update all prices based on inflation or market changes
export const updateAllPrices = (inflationRate: number): void => {
  Object.keys(pricing.materials).forEach(key => {
    pricing.materials[key].basePrice *= (1 + inflationRate);
    pricing.materials[key].lastUpdated = new Date().toISOString();
  });
  
  Object.keys(pricing.labor).forEach(key => {
    pricing.labor[key].basePrice *= (1 + inflationRate);
    pricing.labor[key].lastUpdated = new Date().toISOString();
  });
  
  pricing.lastFullUpdate = new Date().toISOString();
};

export default pricing;
