import _ from "lodash";

import { ISorter } from "./types";

export class MergeSort<T> implements ISorter<T> {
  public sort(array: T[], length: number) {
    return this.subSort(array, length);
  }

  private subSort(array: T[], length: number): T[] {
    if (length === 0 || length === 1) {
      return array;
    }

    const left = _.take(array, Math.floor(length / 2));
    const right = _.takeRight(array, Math.ceil(length / 2));
    const sortedLeft = this.subSort(left, left.length);
    const sortedRight = this.subSort(right, right.length);

    return this.merge(sortedLeft, sortedRight, length);
  }

  private merge(a: T[], b: T[], n: number): T[] {
    const result: T[] = [];

    let aIterator = 0;
    let bIterator = 0;

    for (let k = 0; k < n; k++) {
      const aElement = a[aIterator];
      const bElement = b[bIterator];

      if (aElement <= bElement || bElement == null) {
        result.push(aElement);
        aIterator += 1;
      } else {
        result.push(bElement);
        bIterator += 1;
      }
    }

    return result;
  }
}
