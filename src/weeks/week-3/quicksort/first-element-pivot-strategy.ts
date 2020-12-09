import { IPivotStrategy } from "./types";

export class FirstElementPivotStrategy implements IPivotStrategy {
  get(array: number[]) {
    return {
      index: 0,
      value: array[0],
    };
  }
}
