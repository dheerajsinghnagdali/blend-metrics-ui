export type WithoutChildren<T extends { children?: K }, K = any> = Omit<
  T,
  "children"
>;
