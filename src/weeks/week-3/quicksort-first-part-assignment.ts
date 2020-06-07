import fs from "fs";
import * as path from "path";

import {Assignment} from "../utils";
import {Quicksort} from "./quicksort";
import {FirstElementPivotStrategy} from "./quicksort/first-element-pivot-strategy";

const assignmentFn = () => {
  const pivotStrategy = new FirstElementPivotStrategy();
  const quicksort = new Quicksort({pivotStrategy});
  const assignmentFile = fs.readFileSync(path.join(__dirname, "../../misc/assignment-3.txt"));

  const array = assignmentFile
    .toString()
    .split("\n")
    .filter((e) => e !== "")
    .map(Number);

  quicksort.sort(array);

  return quicksort.getComparisons();
};

export const quicksortFirstPartAssignment = new Assignment("QUICKSORT COMPARISONS", assignmentFn);
