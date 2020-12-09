import { IPivotStrategy } from "./types";

export class LastElementPivotStrategy implements IPivotStrategy {
  get(array: number[]) {
    return {
      index: array.length - 1,
      value: array[array.length - 1],
    };
  }
}
