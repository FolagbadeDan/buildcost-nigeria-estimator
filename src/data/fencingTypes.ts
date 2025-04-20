
export interface FenceType {
  id: string;
  name: string;
  description: string;
  basePricePerMeter: number;
  defaultHeight: number;
  materials: FenceMaterial[];
}

export interface FenceMaterial {
  name: string;
  unit: string;
  quantityPerMeter: number;
  pricePerUnit: number;
  percentageOfTotal: number;
}

export interface GateOption {
  id: string;
  name: string;
  description: string;
  price: number;
  width: number;
}

export interface SecurityFeature {
  id: string;
  name: string;
  description: string;
  pricePerMeter: number;
}

export const fenceTypes: FenceType[] = [
  {
    id: "block-wall",
    name: "Block Wall",
    description: "Standard concrete block wall with columns",
    basePricePerMeter: 25000,
    defaultHeight: 1.8,
    materials: [
      {
        name: "Cement",
        unit: "Bag",
        quantityPerMeter: 2.5,
        pricePerUnit: 5000,
        percentageOfTotal: 0.2
      },
      {
        name: "Blocks",
        unit: "Piece",
        quantityPerMeter: 18,
        pricePerUnit: 400,
        percentageOfTotal: 0.35
      },
      {
        name: "Sand",
        unit: "Ton",
        quantityPerMeter: 0.5,
        pricePerUnit: 15000,
        percentageOfTotal: 0.1
      },
      {
        name: "Gravel",
        unit: "Ton",
        quantityPerMeter: 0.2,
        pricePerUnit: 18000,
        percentageOfTotal: 0.1
      },
      {
        name: "Reinforcement Bars",
        unit: "Ton",
        quantityPerMeter: 0.01,
        pricePerUnit: 450000,
        percentageOfTotal: 0.15
      },
      {
        name: "Paint",
        unit: "Liter",
        quantityPerMeter: 0.5,
        pricePerUnit: 3000,
        percentageOfTotal: 0.1
      }
    ]
  },
  {
    id: "brick-wall",
    name: "Brick Wall",
    description: "Decorative brick wall with concrete columns",
    basePricePerMeter: 35000,
    defaultHeight: 1.8,
    materials: [
      {
        name: "Cement",
        unit: "Bag",
        quantityPerMeter: 1.8,
        pricePerUnit: 5000,
        percentageOfTotal: 0.15
      },
      {
        name: "Bricks",
        unit: "Piece",
        quantityPerMeter: 50,
        pricePerUnit: 250,
        percentageOfTotal: 0.4
      },
      {
        name: "Sand",
        unit: "Ton",
        quantityPerMeter: 0.4,
        pricePerUnit: 15000,
        percentageOfTotal: 0.1
      },
      {
        name: "Gravel",
        unit: "Ton",
        quantityPerMeter: 0.15,
        pricePerUnit: 18000,
        percentageOfTotal: 0.1
      },
      {
        name: "Reinforcement Bars",
        unit: "Ton",
        quantityPerMeter: 0.01,
        pricePerUnit: 450000,
        percentageOfTotal: 0.15
      },
      {
        name: "Sealant",
        unit: "Liter",
        quantityPerMeter: 0.3,
        pricePerUnit: 5000,
        percentageOfTotal: 0.1
      }
    ]
  }
];

export const gateOptions: GateOption[] = [
  {
    id: "pedestrian",
    name: "Pedestrian Gate",
    description: "Small gate for pedestrian access",
    price: 80000,
    width: 1
  },
  {
    id: "single-car",
    name: "Single Car Gate",
    description: "Standard gate for single car access",
    price: 250000,
    width: 3
  },
  {
    id: "double-car",
    name: "Double Car Gate",
    description: "Wide gate for double car access",
    price: 400000,
    width: 5
  }
];

export const securityFeatures: SecurityFeature[] = [
  {
    id: "razor-wire",
    name: "Razor Wire",
    description: "Protective razor wire on top of fence",
    pricePerMeter: 2500
  },
  {
    id: "electric-fence",
    name: "Electric Fence",
    description: "Electrified wiring on top of fence",
    pricePerMeter: 6000
  },
  {
    id: "metal-spikes",
    name: "Metal Spikes",
    description: "Decorative metal spikes on top of fence",
    pricePerMeter: 3500
  }
];
