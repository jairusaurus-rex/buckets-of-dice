export const MessagerReducerActions= {
  ADD_JSX: "ADD_JSX"
} as const;

export type MessagerReducerActionsEnum = typeof MessagerReducerActions[keyof typeof MessagerReducerActions];
