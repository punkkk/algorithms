import casual from "casual";
import {SimpleMultiplier, SimpleSum, Cache} from "../../src/weeks/week-1";

describe("SimpleMultiplier", () => {
  it("multiply small numbers", () => {
    const simpleMultiplier = new SimpleMultiplier({
      cache: new Cache({cacheTime: 10}),
      adder: new SimpleSum({cache: new Cache({cacheTime: 10})}),
    });
    const x = casual.integer(0, 10e3);
    const y = casual.integer(0, 10e3);

    const product = simpleMultiplier.product(String(x), String(y));

    expect(product).toBe(`${x * y}`);
  });

  it("multiply large numbers", () => {
    const simpleMultiplier = new SimpleMultiplier({
      cache: new Cache({cacheTime: 10}),
      adder: new SimpleSum({cache: new Cache({cacheTime: 10})}),
    });
    const x = "3141592653589793238462643383279502884197169399375105820974944592";
    const y = "2718281828459045235360287471352662497757247093699959574966967627";

    const product = simpleMultiplier.product(x, y);

    expect(product).toBe(
      `8539734222673567065463550869546574495034888535765114961879601127067743044893204848617875072216249073013374895871952806582723184`,
    );
  });
});
