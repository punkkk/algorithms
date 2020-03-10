import fs from "fs";
import * as path from "path";

import {Assignment} from "../utils";
import {InversionsCounter} from "./inversions-count";

const assignmentFn = () => {
  const inversion = new InversionsCounter<number>();
  const assignmentFile = fs.readFileSync(path.join(__dirname, "../../misc/assignment-2.txt"));

  const array = assignmentFile
    .toString()
    .split("\n")
    .filter((e) => e !== "")
    .map(Number);

  return inversion.count(array, array.length);
};

export const secondAssignment = new Assignment("INVERSIONS COUNT", assignmentFn);
