export interface IPivot {
  value: number;
  index: number;
}
export interface IPivotStrategy {
  get: (array: number[]) => IPivot;
}
