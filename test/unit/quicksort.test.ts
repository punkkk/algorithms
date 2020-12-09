import casual from "casual";
import { MedianOfThreePivotStrategy, Quicksort } from "../../src/weeks/week-3/quicksort";
import { FirstElementPivotStrategy, LastElementPivotStrategy } from "../../src/weeks/week-3/quicksort";

describe("Qucksort", () => {
  const pivotStrategies = [
    new FirstElementPivotStrategy(),
    new LastElementPivotStrategy(),
    new MedianOfThreePivotStrategy(),
  ];

  for (const pivotStrategy of pivotStrategies) {
    describe(`Strategy: ${pivotStrategy.constructor.name}`, () => {
      it("Sort simple array", () => {
        const qucksort = new Quicksort({ pivotStrategy });
        const array = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

        expect(qucksort.sort(array.concat())).toEqual(array.reverse());
      });

      it("Sort array with negative numbers", () => {
        const qucksort = new Quicksort({ pivotStrategy });
        const array = [99, 8, 7, 6, 5, 4, 3, 2, 1, -99];

        expect(qucksort.sort(array.concat())).toEqual(array.reverse());
      });

      it("Sort random array", () => {
        const qucksort = new Quicksort({ pivotStrategy });
        const array = casual.array_of_integers(10e3).map((e) => (e === 0 ? Math.abs(e) : e));

        expect(qucksort.sort(array.concat())).toEqual(array.sort((a, b) => a - b));
      });

      it("Sort random array of float numbers", () => {
        const qucksort = new Quicksort({ pivotStrategy });
        const array = casual.array_of_doubles(10e3).map((e) => (e === 0 ? Math.abs(e) : e));

        expect(qucksort.sort(array.concat())).toEqual(array.sort((a, b) => a - b));
      });
    });
  }
});
