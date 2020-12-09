import casual from "casual";

import { stubInstance } from "./helpers";
import { Cache, ICache, SimpleSum } from "../../src/weeks/week-1";

describe("SimpleSum", () => {
  describe("with cached value", () => {
    it("should return cached value", () => {
      const cache = stubInstance(Cache);
      const simpleSum = new SimpleSum({ cache: cache as ICache<string> });
      const cachedSum = casual.uuid;

      // todo fix
      // @ts-ignore
      cache.get.mockReturnValue(cachedSum);
      const x = casual.uuid;
      const y = casual.uuid;

      const sum = simpleSum.sum(x, y);

      expect(sum).toBe(cachedSum);
      expect(cache.get).toHaveBeenCalledWith(`${x}${y}`);
    });
  });

  describe("without cached value", () => {
    const cache = stubInstance(Cache);
    let simpleSum: SimpleSum;

    beforeEach(() => {
      // todo fix
      // @ts-ignore
      cache.get.mockReturnValue(null);
      simpleSum = new SimpleSum({ cache: cache as ICache<string> });
    });

    it("cache setting", () => {
      const x = casual.integer(0, 10e5);
      const y = casual.integer(0, 10e5);

      const sum = simpleSum.sum(String(x), String(y));
      expect(cache.get).toHaveBeenCalled();
      expect(cache.set).toHaveBeenCalledWith(`${x}${y}`, sum);
    });

    it("little numbers", () => {
      const x = casual.integer(0, 10e3);
      const y = casual.integer(10e3, 10e5);

      const sum = simpleSum.sum(String(x), String(y));
      expect(sum).toBe(String(x + y));
    });

    it("with guaranteed co", () => {
      const x = 99999999999;
      const y = 999999;

      const sum = simpleSum.sum(String(x), String(y));
      expect(sum).toBe(String(x + y));
    });

    it("large numbers", () => {
      const x = "3141592653589793238462643383279502884197169399375105820974944592";
      const y = "2718281828459045235360287471352662497757247093699959574966967627";

      const sum = simpleSum.sum(x, y);
      expect(sum).toBe("5859874482048838473822930854632165381954416493075065395941912219");
    });
  });
});
