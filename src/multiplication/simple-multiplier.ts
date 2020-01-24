import {IAdder, IMultiplier} from "./types";
import {ICache} from "../cache";

export interface ISimpleMultiplierDependencies {
  cache: ICache<string>;
  adder: IAdder;
}

export class SimpleMultiplier implements IMultiplier {
  private cache: ICache<string>;
  private adder: IAdder;

  constructor(dependencies: ISimpleMultiplierDependencies) {
    this.cache = dependencies.cache;
    this.adder = dependencies.adder;
  }

  product(x: string, y: string) {
    const key = `${x}${y}`;
    const cached = this.cache.get(key);

    if (cached) {
      return cached;
    }

    const subProducts = [];

    for (let i = y.length - 1; i >= 0; i--) {
      let co = 0;
      const currentSubProduct = new Array(y.length - 1 - i).fill(0);

      for (let j = x.length - 1; j >= 0; j--) {
        const product = parseInt(y[i], 10) * parseInt(x[j], 10) + co;

        if (product >= 10) {
          currentSubProduct.push(product % 10);
          co = Math.floor(product / 10);
        } else {
          currentSubProduct.push(product);
          co = 0;
        }
      }

      if (co > 0) {
        currentSubProduct.push(co);
      }

      subProducts.push(currentSubProduct.reverse());
    }

    const result = subProducts.reduce((acc, subProduct) => this.adder.sum(acc, subProduct.join('')), '0');

    this.cache.set(key, result);

    return result;
  }
}
