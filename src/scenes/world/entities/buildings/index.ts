import { BuildingVariant } from '~type/building';

import { BuildingAmmunition } from './ammunition';
import { BuildingMedic } from './medic';
import { BuildingMineBronze, BuildingMineGold, BuildingMineSilver } from './mines';
import { BuildingTowerFire, BuildingTowerFrozen, BuildingTowerLazer } from './towers';
import { BuildingWall } from './wall';

export const BUILDINGS: {
  [value in BuildingVariant]: any
} = {
  [BuildingVariant.WALL]: BuildingWall,
  [BuildingVariant.TOWER_FIRE]: BuildingTowerFire,
  [BuildingVariant.TOWER_FROZEN]: BuildingTowerFrozen,
  [BuildingVariant.TOWER_LAZER]: BuildingTowerLazer,
  [BuildingVariant.MINE_BRONZE]: BuildingMineBronze,
  [BuildingVariant.MINE_SILVER]: BuildingMineSilver,
  [BuildingVariant.MINE_GOLD]: BuildingMineGold,
  [BuildingVariant.AMMUNITION]: BuildingAmmunition,
  [BuildingVariant.MEDIC]: BuildingMedic,
};

// export * from './ammunition';
// export * from './medic';
// export * from './mine';
// export * from './mines';
// export * from './tower';
// export * from './towers';
// export * from './wall';
