import casual from "casual";

import {MergeSort} from "../../src/sort";

describe("MergeSort", () => {
  it("Sort simple array", () => {
    const mergeSort = new MergeSort<number>();
    const array = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

    expect(mergeSort.sort(array, array.length)).toStrictEqual(array.reverse());
  });

  it("Sort array with negative numbers", () => {
    const mergeSort = new MergeSort<number>();
    const array = [99, 8, 7, 6, 5, 4, 3, 2, 1, -99];

    expect(mergeSort.sort(array, array.length)).toStrictEqual(array.reverse());
  });

  it("Sort random array", () => {
    const mergeSort = new MergeSort<number>();
    const array = casual.array_of_integers(10e3);

    expect(mergeSort.sort(array, array.length)).toStrictEqual(array.sort((a, b) => a - b));
  });

  it("Sort random array of float numbers", () => {
    const mergeSort = new MergeSort<number>();
    const array = casual.array_of_doubles(10e3);

    expect(mergeSort.sort(array, array.length)).toStrictEqual(array.sort((a, b) => a - b));
  });
});
