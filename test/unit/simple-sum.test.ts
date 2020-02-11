import casual from "casual";

import {stubInstance} from "./helpers";
import {Cache, ICache} from "../../src/cache";
import {SimpleSum} from "../../src/multiplication/simple-sum";

describe("SimpleSum", () => {
  describe("with cached value", () => {
    it("should return cached value", () => {
      const cache = stubInstance(Cache);
      const simpleSum = new SimpleSum({cache: cache as ICache<string>});
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
});
