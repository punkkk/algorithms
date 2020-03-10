import _ from "lodash";
import {IInversionsCounter} from "./types";

export class InversionsCounter<T> implements IInversionsCounter<T> {
  public count(array: T[], length: number) {
    const {inversionsCount} = this.subSort(array, length);

    return inversionsCount;
  }

  private subSort(array: T[], length: number): {result: T[]; inversionsCount: number} {
    if (length === 0 || length === 1) {
      return {result: array, inversionsCount: 0};
    }

    const left = _.take(array, Math.floor(length / 2));
    const right = _.takeRight(array, Math.ceil(length / 2));
    const {result: leftResult, inversionsCount: inversionsCountLeft} = this.subSort(left, left.length);
    const {result: rightResult, inversionsCount: inversionsCountRight} = this.subSort(right, right.length);

    const {result, inversionsCount} = this.merge(leftResult, rightResult, length);

    return {
      result,
      inversionsCount: inversionsCountLeft + inversionsCountRight + inversionsCount,
    };
  }

  private merge(a: T[], b: T[], n: number): {result: T[]; inversionsCount: number} {
    const result: T[] = [];

    let aIterator = 0;
    let bIterator = 0;
    let inversionsCount = 0;

    for (let k = 0; k < n; k++) {
      const aElement = a[aIterator];
      const bElement = b[bIterator];

      if (aElement <= bElement || bElement == null) {
        result.push(aElement);
        aIterator += 1;
      } else {
        result.push(bElement);
        bIterator += 1;
        inversionsCount += a.length - aIterator;
      }
    }

    return {result, inversionsCount};
  }
}
