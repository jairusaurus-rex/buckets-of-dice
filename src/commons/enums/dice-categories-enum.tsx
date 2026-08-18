export const DiceCategories = {
  POOL: "POOL",
  COMBAT: "COMBAT",
  SKILL: "SKILL",
  SUIT_GEAR: "SUIT_GEAR",
  NON_SUIT_GEAR: "NON_SUIT_GEAR",
  VESSEL: "VESSEL",
  ASSETS: "ASSETS",
} as const;

export type DiceCategoriesEnum = typeof DiceCategories[keyof typeof DiceCategories];
