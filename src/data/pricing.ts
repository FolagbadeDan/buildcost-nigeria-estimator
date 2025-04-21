
import { PricingData } from "../types/pricingTypes";

// Centralized pricing data for all materials and labor - Updated April 2025
const pricing: PricingData & {
  regionMultipliers: Record<string, number>;
  qualityMultipliers: Record<string, number>;
} = {
  lastFullUpdate: "2025-04-21",
  region: "Lagos",
  materials: {
    cement: {
      id: "cement",
      name: "Cement",
      unit: "Bag",
      basePrice: 9800, // Updated from ₦5,000 to ₦9,800 based on current market prices
      lastUpdated: "2025-04-21"
    },
    sand: {
      id: "sand",
      name: "Sharp Sand",
      unit: "Trip (10 tons)",
      basePrice: 45000,
      lastUpdated: "2025-04-21"
    },
    plasterSand: {
      id: "plasterSand",
      name: "Plaster Sand",
      unit: "Trip (10 tons)",
      basePrice: 35000,
      lastUpdated: "2025-04-21"
    },
    fillingSand: {
      id: "fillingSand",
      name: "Filling Sand",
      unit: "Trip (10 tons)",
      basePrice: 34000,
      lastUpdated: "2025-04-21"
    },
    gravel: {
      id: "gravel",
      name: "Gravel/Granite",
      unit: "Ton",
      basePrice: 34000, // Updated from ₦18,000 to ₦34,000 per ton
      lastUpdated: "2025-04-21"
    },
    reinforcementBars: {
      id: "reinforcementBars",
      name: "Reinforcement Bars",
      unit: "Ton",
      basePrice: 700000,
      lastUpdated: "2025-04-21"
    },
    steelRod12mm: {
      id: "steelRod12mm",
      name: "Steel Rod (12mm)",
      unit: "Length",
      basePrice: 9000,
      lastUpdated: "2025-04-21"
    },
    steelRod16mm: {
      id: "steelRod16mm",
      name: "Steel Rod (16mm)",
      unit: "Length",
      basePrice: 14800,
      lastUpdated: "2025-04-21"
    },
    steelRod10mm: {
      id: "steelRod10mm",
      name: "Steel Rod (10mm)",
      unit: "Length",
      basePrice: 8500,
      lastUpdated: "2025-04-21"
    },
    steelRod8mm: {
      id: "steelRod8mm",
      name: "Steel Rod (8mm)",
      unit: "Length",
      basePrice: 3300,
      lastUpdated: "2025-04-21"
    },
    bindingWire: {
      id: "bindingWire",
      name: "Binding Wire",
      unit: "Kg",
      basePrice: 3700,
      lastUpdated: "2025-04-21"
    },
    blocks9inch: {
      id: "blocks9inch",
      name: "Blocks (9-inch)",
      unit: "Piece",
      basePrice: 500,
      lastUpdated: "2025-04-21"
    },
    blocks6inch: {
      id: "blocks6inch",
      name: "Blocks (6-inch)",
      unit: "Piece",
      basePrice: 400,
      lastUpdated: "2025-04-21"
    },
    roofingSheets: {
      id: "roofingSheets",
      name: "Long Span Aluminum Roofing Sheets (0.45mm)",
      unit: "Sheet",
      basePrice: 6000,
      lastUpdated: "2025-04-21"
    },
    stoneCoatedRoofingSheets: {
      id: "stoneCoatedRoofingSheets",
      name: "Stone Coated Roofing Sheets",
      unit: "Square Meter",
      basePrice: 4000,
      lastUpdated: "2025-04-21"
    },
    wood2x4: {
      id: "wood2x4",
      name: "Wood (2x4)",
      unit: "Length",
      basePrice: 1800,
      lastUpdated: "2025-04-21"
    },
    hardwood2x3: {
      id: "hardwood2x3",
      name: "Hardwood (2x3)",
      unit: "Length",
      basePrice: 700,
      lastUpdated: "2025-04-21"
    },
    softwood2x3: {
      id: "softwood2x3",
      name: "Softwood (2x3)",
      unit: "Length",
      basePrice: 500,
      lastUpdated: "2025-04-21"
    },
    nailsFasteners: {
      id: "nailsFasteners",
      name: "Nails and Fasteners",
      unit: "Kg",
      basePrice: 2000,
      lastUpdated: "2025-04-21"
    },
    nails3inch: {
      id: "nails3inch",
      name: "Nails (3-inch)",
      unit: "Bag",
      basePrice: 32000,
      lastUpdated: "2025-04-21"
    },
    nails4inch: {
      id: "nails4inch",
      name: "Nails (4-inch)",
      unit: "Bag",
      basePrice: 20000,
      lastUpdated: "2025-04-21"
    },
    ceilingMaterials: {
      id: "ceilingMaterials",
      name: "Ceiling Materials",
      unit: "Sq. Meter",
      basePrice: 3500,
      lastUpdated: "2025-04-21"
    },
    popCement: {
      id: "popCement",
      name: "P.O.P Cement",
      unit: "Bag (40kg)",
      basePrice: 12500,
      lastUpdated: "2025-04-21"
    },
    tileVitrified: {
      id: "tileVitrified",
      name: "Vitrified Tiles",
      unit: "Sq. Meter",
      basePrice: 5500,
      lastUpdated: "2025-04-21"
    },
    tileCeramic: {
      id: "tileCeramic",
      name: "Ceramic Tiles",
      unit: "Sq. Meter",
      basePrice: 4400,
      lastUpdated: "2025-04-21"
    },
    tileGranite: {
      id: "tileGranite",
      name: "Granite Tiles",
      unit: "Sq. Meter",
      basePrice: 15000,
      lastUpdated: "2025-04-21"
    },
    paint: {
      id: "paint",
      name: "Paint",
      unit: "Liter",
      basePrice: 3500,
      lastUpdated: "2025-04-21"
    },
    doors: {
      id: "doors",
      name: "Interior Doors (Standard)",
      unit: "Piece",
      basePrice: 85000,
      lastUpdated: "2025-04-21"
    },
    doorsSecurity: {
      id: "doorsSecurity",
      name: "Security Doors",
      unit: "Piece",
      basePrice: 180000,
      lastUpdated: "2025-04-21"
    },
    windows: {
      id: "windows",
      name: "Windows (Aluminum)",
      unit: "Sq. Meter",
      basePrice: 90000,
      lastUpdated: "2025-04-21"
    },
    windowsCasement: {
      id: "windowsCasement",
      name: "Casement Windows with Burglary",
      unit: "Piece",
      basePrice: 128000,
      lastUpdated: "2025-04-21"
    },
    sanitaryFixtures: {
      id: "sanitaryFixtures",
      name: "Sanitary Fixtures (WC)",
      unit: "Set",
      basePrice: 90000,
      lastUpdated: "2025-04-21"
    },
    electricalFixtures: {
      id: "electricalFixtures",
      name: "Electrical Fixtures",
      unit: "Point",
      basePrice: 3500,
      lastUpdated: "2025-04-21"
    },
    pvcPipes1inch: {
      id: "pvcPipes1inch",
      name: "PVC Pipes (1-inch)",
      unit: "Length",
      basePrice: 2200,
      lastUpdated: "2025-04-21"
    },
    pvcPipes2inch: {
      id: "pvcPipes2inch",
      name: "PVC Pipes (2-inch)",
      unit: "Length",
      basePrice: 3500,
      lastUpdated: "2025-04-21"
    },
    pvcPipes4inch: {
      id: "pvcPipes4inch",
      name: "PVC Pipes (4-inch)",
      unit: "Length",
      basePrice: 8755,
      lastUpdated: "2025-04-21"
    },
    metalGate: {
      id: "metalGate",
      name: "Metal Gate (Standard)",
      unit: "Piece",
      basePrice: 350000,
      lastUpdated: "2025-04-21"
    },
    rollingGate: {
      id: "rollingGate",
      name: "Rolling Gate",
      unit: "Piece",
      basePrice: 500000,
      lastUpdated: "2025-04-21"
    },
    marinePlywood: {
      id: "marinePlywood",
      name: "Marine Plywood",
      unit: "Sheet",
      basePrice: 30000,
      lastUpdated: "2025-04-21"
    },
    hardPlywood: {
      id: "hardPlywood",
      name: "Hard Plywood",
      unit: "Sheet",
      basePrice: 24000,
      lastUpdated: "2025-04-21"
    }
  },
  labor: {
    foundation: {
      id: "foundation",
      category: "Foundation",
      description: "Foundation laying work",
      unit: "per sqm",
      basePrice: 3000,
      lastUpdated: "2025-04-21"
    },
    bricklaying: {
      id: "bricklaying",
      category: "Structure",
      description: "Bricklaying and structural work",
      unit: "per sqm",
      basePrice: 3500,
      lastUpdated: "2025-04-21"
    },
    blockLayingFence: {
      id: "blockLayingFence",
      category: "Fencing",
      description: "Block laying for fence",
      unit: "per block",
      basePrice: 70,
      lastUpdated: "2025-04-21"
    },
    roofing: {
      id: "roofing",
      category: "Roofing",
      description: "Roofing installation",
      unit: "per sqm",
      basePrice: 2500,
      lastUpdated: "2025-04-21"
    },
    tiling: {
      id: "tiling",
      category: "Finishing",
      description: "Tiling work",
      unit: "per sqm",
      basePrice: 2200,
      lastUpdated: "2025-04-21"
    },
    painting: {
      id: "painting",
      category: "Finishing",
      description: "Painting work",
      unit: "per sqm",
      basePrice: 1800,
      lastUpdated: "2025-04-21"
    },
    plumbing: {
      id: "plumbing",
      category: "Finishing",
      description: "Plumbing installation",
      unit: "per point",
      basePrice: 10000,
      lastUpdated: "2025-04-21"
    },
    electrical: {
      id: "electrical",
      category: "Finishing",
      description: "Electrical installation",
      unit: "per point",
      basePrice: 6500,
      lastUpdated: "2025-04-21"
    },
    plastering: {
      id: "plastering",
      category: "Finishing",
      description: "Plastering work",
      unit: "per sqm",
      basePrice: 1500,
      lastUpdated: "2025-04-21"
    },
    carpentry: {
      id: "carpentry",
      category: "Structure",
      description: "Carpentry work",
      unit: "per day",
      basePrice: 8000,
      lastUpdated: "2025-04-21"
    },
    excavation: {
      id: "excavation",
      category: "Foundation",
      description: "Excavation work",
      unit: "per cubic meter",
      basePrice: 3000,
      lastUpdated: "2025-04-21"
    },
    fenceErection: {
      id: "fenceErection",
      category: "Fencing",
      description: "Fence erection complete",
      unit: "per linear meter",
      basePrice: 12000,
      lastUpdated: "2025-04-21"
    },
    gateInstallation: {
      id: "gateInstallation",
      category: "Fencing",
      description: "Gate installation",
      unit: "per gate",
      basePrice: 50000,
      lastUpdated: "2025-04-21"
    }
  },
  // Add regional multipliers
  regionMultipliers: {
    "Lagos": 1.0,
    "Abuja": 0.95,
    "Port Harcourt": 1.05,
    "Kano": 0.85,
    "Ibadan": 0.9,
    "Enugu": 0.92,
    "Kaduna": 0.88,
    "Benin": 0.93,
    "Uyo": 0.98
  },
  // Add quality multipliers
  qualityMultipliers: {
    "Economy": 0.85,
    "Standard": 1.0,
    "Premium": 1.35,
    "Luxury": 1.8
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

// Function to get price adjusted for region
export const getRegionalPrice = (id: string, region: string, isLabor: boolean = false): number => {
  const basePrice = isLabor ? getLaborPrice(id) : getMaterialPrice(id);
  const multiplier = pricing.regionMultipliers[region] || 1.0;
  return basePrice * multiplier;
};

// Function to get price adjusted for quality
export const getQualityAdjustedPrice = (id: string, quality: string, isLabor: boolean = false): number => {
  const basePrice = isLabor ? getLaborPrice(id) : getMaterialPrice(id);
  const multiplier = pricing.qualityMultipliers[quality] || 1.0;
  return basePrice * multiplier;
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
