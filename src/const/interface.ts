import { ResourceType, ResourceColor } from '~type/world/resources';

export const INTERFACE_TEXT_COLOR = {
  PRIMARY: '#ff9600',
  BLUE: '#0076ad',
  BLUE_LIGHT: '#a8f0ff',
  BLUE_DARK: '#18324f',
  ACTIVE: '#a7cc43',
  INFO: '#',
  INFO_DARK: '#83a81c',
  WARN: '#',
  WARN_DARK: '#ff9000',
  ERROR: '#ff6d6d',
  ERROR_DARK: '#db2323',
};

export const INTERFACE_BOX_COLOR = {
  BLUE: 0x18324f,
};

export const INTERFACE_FONT = {
  PIXEL: 'Retro',
  MONOSPACE: 'Monospace',
};

export const RESOURCE_COLOR: ResourceColor = {
  [ResourceType.BRONZE]: 0xfc9547,
  [ResourceType.SILVER]: 0xdadada,
  [ResourceType.GOLD]: 0xfdca52,
};
