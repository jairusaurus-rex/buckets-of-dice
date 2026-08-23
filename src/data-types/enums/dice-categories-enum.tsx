export const DiceCategories = {
  POOL: "POOL",
  COMBAT: "COMBAT",
  SKILL: "SKILL",
  SUIT_GEAR: "SUIT GEAR",
  NON_SUIT_GEAR: "GEAR",
  VESSEL_TRAVEL: "VESSEL TRAVEL",
  VESSEL_COMBAT: "VESSEL COMBAT",
  VESSEL_EXTRA: "VESSEL EXTRA",
  ASSETS: "ASSETS",
  RELATIONSHIPS: "RELATIONSHIPS",
} as const;

export type DiceCategoriesEnum = typeof DiceCategories[keyof typeof DiceCategories];
