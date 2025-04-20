
import { BuildingType } from "../buildingTypes";

import threeBedroomBungalow from "./3BedroomBungalow";
import fiveBedroomDuplex from "./5BedroomDuplex";
import twoBedroomFlat from "./2BedroomFlat";
import miniFlat from "./miniFlat";
import selfContain from "./selfContain";
import terrace from "./terrace";

const buildingTypes: BuildingType[] = [
  threeBedroomBungalow,
  fiveBedroomDuplex,
  twoBedroomFlat,
  miniFlat,
  selfContain,
  terrace,
];

export { BuildingType };
export default buildingTypes;
