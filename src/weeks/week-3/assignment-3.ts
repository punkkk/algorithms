import fs from "fs";
import * as path from "path";

import { Assignment } from "../utils";
import { MedianOfThreePivotStrategy, Quicksort } from "./quicksort";

const assignmentFn = () => {
  const pivotStrategy = new MedianOfThreePivotStrategy();
  const quicksort = new Quicksort({ pivotStrategy });
  const assignmentFile = fs.readFileSync(path.join(__dirname, "../../misc/assignment-3.txt"));

  const array = assignmentFile
    .toString()
    .split("\n")
    .filter((e) => e !== "")
    .map(Number);

  quicksort.sort(array);

  return quicksort.getComparisons();
};

export const thirdWeekAssignmentThird = new Assignment(
  "QUICKSORT COMPARISONS WITH MEDIAN OF THREE ELEMENT AS A PIVOT",
  assignmentFn,
);
