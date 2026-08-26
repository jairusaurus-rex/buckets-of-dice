export const DiceRollerReducerActions = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  UP_RANK: "UP_RANK",
  DOWN_RANK: "DOWN_RANK",
  CHANGE_TITLE: "CHANGE_TITLE",
  ROLL: "ROLL",
  CLEAR: "CLEAR",
} as const;

export type DiceRollerReducerActionsEnum = typeof DiceRollerReducerActions[keyof typeof DiceRollerReducerActions];
