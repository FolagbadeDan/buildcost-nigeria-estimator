
import { BuildingType } from "../data/buildingTypes";
import { FenceType, GateOption, SecurityFeature } from "../data/fencingTypes";
import { Location } from "../data/locations";
import { QualityLevel } from "../data/qualityLevels";
import pricing, { getMaterialPrice } from "../data/pricing";

interface BuildingEstimationParams {
  buildingType: BuildingType;
  location: Location;
  qualityLevel: QualityLevel;
  sizeAdjustment: number; // percentage adjustment to base size (e.g., 1.1 for 10% larger)
}

export interface BuildingEstimation {
  totalCost: number;
  baseCost: number;
  adjustedCost: number;
  sizeInSqMeters: number;
  phases: {
    name: string;
    cost: number;
    percentage: number;
    materials: {
      name: string;
      quantity: number;
      unit: string;
      cost: number;
    }[];
  }[];
}

interface FencingEstimationParams {
  fenceType: FenceType;
  location: Location;
  qualityLevel: QualityLevel;
  perimeter: number; // in meters
  height: number; // in meters
  gates: { option: GateOption; quantity: number }[];
  cornerPosts: number;
  securityFeatures: SecurityFeature[];
}

export interface FencingEstimation {
  totalCost: number;
  baseFenceCost: number;
  adjustedFenceCost: number;
  gatesCost: number;
  securityFeaturesCost: number;
  perimeter: number;
  costPerMeter: number;
  materials: {
    name: string;
    quantity: number;
    unit: string;
    cost: number;
  }[];
  gates: {
    name: string;
    quantity: number;
    cost: number;
  }[];
  securityFeatures: {
    name: string;
    cost: number;
  }[];
}

export const calculateBuildingEstimation = ({
  buildingType,
  location,
  qualityLevel,
  sizeAdjustment,
}: BuildingEstimationParams): BuildingEstimation => {
  const adjustedSize = buildingType.baseSqMeters * sizeAdjustment;
  const baseCost = buildingType.basePrice;
  
  // Apply location and quality adjustments
  const adjustedCost = baseCost * location.priceMultiplier * qualityLevel.priceMultiplier * sizeAdjustment;
  
  const phases = buildingType.phases.map(phase => {
    const phaseCost = adjustedCost * phase.percentageOfTotal;
    
    const materials = phase.materials.map(material => {
      const quantity = material.quantityPerSqMeter * adjustedSize;
      // Get the current price from our centralized pricing system
      const currentPrice = getMaterialPrice(material.materialId);
      const materialCost = quantity * currentPrice;
      
      return {
        name: material.name,
        quantity,
        unit: material.unit,
        cost: materialCost,
      };
    });
    
    return {
      name: phase.name,
      cost: phaseCost,
      percentage: phase.percentageOfTotal * 100,
      materials,
    };
  });
  
  return {
    totalCost: adjustedCost,
    baseCost,
    adjustedCost,
    sizeInSqMeters: adjustedSize,
    phases,
  };
};

export const calculateFencingEstimation = ({
  fenceType,
  location,
  qualityLevel,
  perimeter,
  height,
  gates,
  cornerPosts,
  securityFeatures,
}: FencingEstimationParams): FencingEstimation => {
  // Calculate base fence cost
  const heightFactor = height / fenceType.defaultHeight;
  const baseFenceCost = fenceType.basePricePerMeter * perimeter * heightFactor;
  
  // Apply location and quality adjustments
  const adjustedFenceCost = baseFenceCost * location.priceMultiplier * qualityLevel.priceMultiplier;
  
  // Calculate gates cost
  const gatesCost = gates.reduce((total, gate) => {
    return total + (gate.option.price * gate.quantity);
  }, 0);
  
  // Calculate security features cost
  const securityFeaturesCost = securityFeatures.reduce((total, feature) => {
    return total + (feature.pricePerMeter * perimeter);
  }, 0);
  
  // Calculate materials
  const materials = fenceType.materials.map(material => {
    const quantity = material.quantityPerMeter * perimeter * heightFactor;
    const cost = quantity * material.pricePerUnit;
    
    return {
      name: material.name,
      quantity,
      unit: material.unit,
      cost,
    };
  });
  
  // Corner posts increase costs slightly (add 5% per corner post)
  const cornerPostFactor = 1 + (cornerPosts * 0.05);
  const totalFenceCost = adjustedFenceCost * cornerPostFactor;
  
  return {
    totalCost: totalFenceCost + gatesCost + securityFeaturesCost,
    baseFenceCost,
    adjustedFenceCost: totalFenceCost,
    gatesCost,
    securityFeaturesCost,
    perimeter,
    costPerMeter: totalFenceCost / perimeter,
    materials,
    gates: gates.map(gate => ({
      name: gate.option.name,
      quantity: gate.quantity,
      cost: gate.option.price * gate.quantity,
    })),
    securityFeatures: securityFeatures.map(feature => ({
      name: feature.name,
      cost: feature.pricePerMeter * perimeter,
    })),
  };
};

// Calculate land perimeter from dimensions
export const calculatePerimeter = (length: number, width: number): number => {
  return 2 * (length + width);
};

// Format currency in Naira
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

// Format number with 2 decimal places
export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat('en-NG', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};
