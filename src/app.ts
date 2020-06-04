/* tslint:disable:no-console */
import {MergeSort} from "./sort";
import {firstAssignment} from "./weeks";
import {InversionsCounter, secondAssignment} from "./weeks/week-2";
import {SecondMax} from "./optional";
import {Quicksort} from "./weeks/week-3/quicksort";

const main = async () => {
  await firstAssignment.do();
  await secondAssignment.do();

  // todo move in test
  const mergeSort = new MergeSort<number>();
  console.log(mergeSort.sort([1, 5, 1, 3, 2, 9, 10, -1], 8));
  console.log(mergeSort.sort([10, 9, 8, 7, 6, 5, 4, 3, 2], 9));

  const inversion = new InversionsCounter<number>();

  console.log(inversion.count([1, 3, 5, 2, 4, 6], 6));
  console.log(inversion.count([6, 5, 4, 3, 2, 1], 6)); // (n * ( n - 1 )) / 2

  const secondMax = new SecondMax();
  console.log(secondMax.find([9, 10, 5, 4, 3, 6, 7, 2]));

  const quicksort = new Quicksort();
  console.log(quicksort.sort([3, 8, 2, 5, 1, 4, 7, 6]));

  process.exit(0);
};

main();
