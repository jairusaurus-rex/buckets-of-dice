export const MessegerDataTypes= {
 JSX: "JSX"
} as const;

export type MessegerDataTypesEnum = typeof MessegerDataTypes[keyof typeof MessegerDataTypes];
