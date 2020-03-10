import {InversionsCounter} from "../../src/weeks/week-2/inversions-count";

describe("Inversions", () => {
  it("count for reversed sorted array", () => {
    const inversions = new InversionsCounter<number>();
    const array = [6, 5, 4, 3, 2, 1];

    expect(inversions.count(array, array.length)).toStrictEqual(15);
  });

  it("count for an 'random' array", () => {
    const inversions = new InversionsCounter<number>();
    const array = [10, 4, 23, 45, 11, 20];

    expect(inversions.count(array, array.length)).toStrictEqual(5);
  });

  it("count for reversed sorted array of doubles", () => {
    const inversions = new InversionsCounter<number>();
    const array = [6.6, 5.5, 4.4, 3.3, 2.2, 1.1];

    expect(inversions.count(array, array.length)).toStrictEqual(15);
  });
});
