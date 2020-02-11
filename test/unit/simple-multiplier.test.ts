import casual from "casual";

import {stubInstance} from "./helpers";
import {Cache, ICache} from "../../src/cache";
import {SimpleSum} from "../../src/multiplication/simple-sum";
import {SimpleMultiplier} from "../../src/multiplication/simple-multiplier";

describe("SimpleMultiplier", () => {
  describe("with cached value", () => {
    it("should return cached value", () => {
      const cache = stubInstance(Cache);
      const simpleMultiplier = new SimpleMultiplier({
        cache: cache as ICache<string>,
        adder: new SimpleSum({cache: new Cache({cacheTime: 0})}),
      });
      const cachedProduct = casual.uuid;

      // todo fix
      // @ts-ignore
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
      const cache = stubInstance(Cache);
      const simpleMultiplier = new SimpleMultiplier({
        cache: cache as ICache<string>,
        adder: new SimpleSum({cache: new Cache({cacheTime: 0})}),
      });

      // todo fix
      // @ts-ignore
      cache.get.mockReturnValue(null);
      const x = "10";
      const y = "10";

      simpleMultiplier.product(x, y);

      expect(cache.set).toHaveBeenCalledWith(`${x}${y}`, "100");
    });
  });
});
