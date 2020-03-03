/* tslint:disable:no-console */
import {MergeSort} from "./sort";
import {firstAssignment} from "./weeks";
import {Inversions, secondAssignment} from "./weeks/week-2";

const main = async () => {
  await firstAssignment.do();
  await secondAssignment.do();

  // todo move in test
  const mergeSort = new MergeSort<number>();
  console.log(mergeSort.sort([1, 5, 1, 3, 2, 9, 10, -1], 8));
  console.log(mergeSort.sort([10, 9, 8, 7, 6, 5, 4, 3, 2], 9));

  const inversion = new Inversions<number>();

  console.log(inversion.count([1, 3, 5, 2, 4, 6], 6));
  console.log(inversion.count([6, 5, 4, 3, 2, 1], 6)); // (n * ( n - 1 )) / 2

  process.exit(0);
};

main();
