import {IPivotStrategy} from "./types";

export class MedianOfThreePivotStrategy implements IPivotStrategy {
  get(array: number[]) {
    const first = array[0];
    const last = array[array.length - 1];
    const middle = array[Math.floor(array.length / 2)];

    const arrayOfThree = [first, last, middle].sort();

    return {
      index: this.getPivotIndex(arrayOfThree, array, {first, middle}),
      value: arrayOfThree[1],
    };
  }

  private getPivotIndex(arrayOfThree: number[], array: number[], {first, middle}: {first: number; middle: number}) {
    const median = arrayOfThree[1];

    if (median === middle) {
      return Math.floor(array.length / 2);
    }

    if (median === first) {
      return 0;
    }

    return array.length - 1;
  }
}
