import {IAdder} from "./types";
import {ICache} from "../cache";

export interface ISimpleSumDependencies {
  cache: ICache<string>;
}

export class SimpleSum implements IAdder {
  private cache: ICache<string>;

  constructor(dependencies: ISimpleSumDependencies) {
    this.cache = dependencies.cache;
  }

  sum(x: string, y: string) {
    const cached = this.cache.get(`${x}${y}`);

    if (cached) {
      return cached;
    }

    const result = [];
    const reversedA = x.split('').reverse().join('');
    const reversedB = y.split('').reverse().join('');

    let co = 0;
    const longest = reversedA.length > reversedB.length ? reversedA.length : reversedB.length;

    for (let i = 0; i < longest; i++) {
      const sum = parseInt(reversedA[i] || '0', 10) + parseInt(reversedB[i] || '0', 10) + co;

      if (sum >= 10) {
        result.push(sum - 10);
        co = 1;
      } else {
        result.push(sum);
        co = 0;
      }
    }

    if (co !== 0) {
      result.push(co)
    }

    return result.reverse().join('');
  }
}
