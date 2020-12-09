import casual from "casual";

import { stubInstance } from "./helpers";
import { Cache, ICache, SimpleSum, SimpleMultiplier } from "../../src/weeks/week-1";

describe("SimpleMultiplier", () => {
  describe("with cached value", () => {
    it("should return cached value", () => {
      const cache = <any>stubInstance(Cache);
      const simpleMultiplier = new SimpleMultiplier({
        cache: cache as ICache<string>,
        adder: new SimpleSum({ cache: new Cache({ cacheTime: 0 }) }),
      });
      const cachedProduct = casual.uuid;

      cache.get.mockReturnValue(cachedProduct);
      const x = casual.uuid;
      const y = casual.uuid;

      const product = simpleMultiplier.product(x, y);

      expect(product).toBe(cachedProduct);
      expect(cache.get).toHaveBeenCalledWith(`${x}${y}`);
    });
  });

  describe("without cached value", () => {
    it("should cache value", () => {
      const cache = <any>stubInstance(Cache);
      const simpleMultiplier = new SimpleMultiplier({
        cache: cache as ICache<string>,
        adder: new SimpleSum({ cache: new Cache({ cacheTime: 0 }) }),
      });

      cache.get.mockReturnValue(null);
      const x = "10";
      const y = "10";

      simpleMultiplier.product(x, y);

      expect(cache.set).toHaveBeenCalledWith(`${x}${y}`, "100");
    });
  });
});
