import casual from "casual";
import {Quicksort} from "../../src/weeks/week-3/quicksort";

describe("Qucksort", () => {
  it("Sort simple array", () => {
    const qucksort = new Quicksort();
    const array = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

    expect(qucksort.sort(array.concat())).toStrictEqual(array.reverse());
  });

  it("Sort array with negative numbers", () => {
    const qucksort = new Quicksort();
    const array = [99, 8, 7, 6, 5, 4, 3, 2, 1, -99];

    expect(qucksort.sort(array.concat())).toStrictEqual(array.reverse());
  });

  it("Sort random array", () => {
    const qucksort = new Quicksort();
    const array = casual.array_of_integers(10e3);

    expect(qucksort.sort(array.concat())).toStrictEqual(array.sort((a, b) => a - b));
  });

  it("Sort random array of float numbers", () => {
    const qucksort = new Quicksort();
    const array = casual.array_of_doubles(10e3);

    expect(qucksort.sort(array.concat())).toStrictEqual(array.sort((a, b) => a - b));
  });
});
