/* tslint:disable:no-console */
import {MergeSort} from "./sort";
import {
  firstAssignment,
  fourthWeekAssignment,
  InversionsCounter,
  secondAssignment,
  quicksortFirstPartAssignment,
  quicksortSecondPartAssignment,
  quicksortThirdPartAssignment,
} from "./weeks";
import {SecondMax} from "./optional";

const main = async () => {
  await firstAssignment.do();
  await secondAssignment.do();
  await quicksortFirstPartAssignment.do();
  await quicksortSecondPartAssignment.do();
  await quicksortThirdPartAssignment.do();
  await fourthWeekAssignment.do();

  // todo move in test
  const mergeSort = new MergeSort<number>();
  console.log(mergeSort.sort([1, 5, 1, 3, 2, 9, 10, -1], 8));
  console.log(mergeSort.sort([10, 9, 8, 7, 6, 5, 4, 3, 2], 9));

  const inversion = new InversionsCounter<number>();

  console.log(inversion.count([1, 3, 5, 2, 4, 6], 6));
  console.log(inversion.count([6, 5, 4, 3, 2, 1], 6)); // (n * ( n - 1 )) / 2

  const secondMax = new SecondMax();
  console.log(secondMax.find([9, 10, 5, 4, 3, 6, 7, 2]));

  process.exit(0);
};

main();
