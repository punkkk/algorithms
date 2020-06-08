import {IPivotStrategy} from "./types";

export class MedianOfThreePivotStrategy implements IPivotStrategy {
  get(array: number[]) {
    const first = array[0];
    const last = array[array.length - 1];
    const middle = array[this.getMiddleIndex(array)];

    const arrayOfThree = [first, last, middle].sort((a, b) => a - b);

    return {
      index: this.getPivotIndex(arrayOfThree, array, {first, middle}),
      value: arrayOfThree[1],
    };
  }

  getMiddleIndex(array: number[]) {
    return array.length % 2 === 0 ? array.length / 2 - 1 : Math.floor(array.length / 2);
  }

  private getPivotIndex(arrayOfThree: number[], array: number[], {first, middle}: {first: number; middle: number}) {
    const median = arrayOfThree[1];

    if (median === middle) {
      return this.getMiddleIndex(array);
    }

    if (median === first) {
      return 0;
    }

    return array.length - 1;
  }
}
