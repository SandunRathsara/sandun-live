export const DATA_FIELDS = [
  "name",
  "designation",
  "dp",
  "email",
  "linkedin",
] as const;

export type DataFields = (typeof DATA_FIELDS)[number];
