import fs from "fs";
import * as path from "path";

import {Assignment} from "../utils";
import {Quicksort} from "./quicksort";

const assignmentFn = () => {
  const quicksort = new Quicksort();
  const assignmentFile = fs.readFileSync(path.join(__dirname, "../../misc/assignment-3.txt"));

  const array = assignmentFile
    .toString()
    .split("\n")
    .filter((e) => e !== "")
    .map(Number);

  quicksort.sort(array);

  return quicksort.getComparisons();
};

export const quicksortComparisonsAssignmentFirstElementAsPivot = new Assignment("QUICKSORT COMPARISONS", assignmentFn);
