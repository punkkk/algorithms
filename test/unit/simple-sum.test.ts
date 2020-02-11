import {stubInstance} from "./helpers";
import {Cache} from "../../src/cache";

describe("SimpleSum", () => {
  describe("with cache", () => {
    const ololo = stubInstance(Cache);

    ololo.getMockName();

    // tslint:disable-next-line:no-console
    console.log(ololo);
  });
});
