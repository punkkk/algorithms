import {IPivotStrategy} from "./types";

interface IQuicksortDependencies {
  pivotStrategy: IPivotStrategy;
}

export class Quicksort {
  // todo make it clear
  private comparisons: number = 0;
  private pivotStrategy: IPivotStrategy;

  constructor(dependencies: IQuicksortDependencies) {
    this.pivotStrategy = dependencies.pivotStrategy;
  }

  sort(array: number[]) {
    // i'm too lazy to do it better
    this.comparisons = 0;

    return this.doSort(array);
  }

  doSort(array: number[]): number[] {
    if (array.length <= 1) {
      return array;
    }

    const {value, index} = this.pivotStrategy.get(array);

    const [left, right] = this.partition(array, index, 0, array.length);

    this.comparisons += array.length - 1;

    return this.doSort(left)
      .concat([value])
      .concat(this.doSort(right));
  }

  partition(array: number[], pivotIndex: number, left: number, right: number) {
    const pivot = array[pivotIndex];

    if (pivotIndex !== left) {
      [array[left], array[pivotIndex]] = [array[pivotIndex], array[left]];
    }

    let i = left + 1;

    for (let j = left + 1; j < right; j++) {
      if (array[j] < pivot) {
        [array[i], array[j]] = [array[j], array[i]];

        i += 1;
      }
    }

    [array[i - 1], array[left]] = [array[left], array[i - 1]];

    return [array.slice(left, i - 1), array.slice(i, right)];
  }

  getComparisons() {
    return this.comparisons;
  }
}
