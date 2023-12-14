export type Serializable = string | number | boolean | {
  [key: string|number]: Serializable;
}
