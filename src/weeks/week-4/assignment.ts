import fs from "fs";
import * as path from "path";

import {Assignment} from "../utils";

const assignmentFn = () => {
  const assignmentFile = fs.readFileSync(path.join(__dirname, "../../misc/assignment-4.txt"));

  const array = assignmentFile
    .toString()
    .split("\n")
    .filter((e) => e !== "")
    .map((str) =>
      str
        .split("\t")
        .filter((e) => e !== "")
        .map(Number),
    );

  return array;
};

export const fourthWeekAssignment = new Assignment("KRAGER'S MIN CUT", assignmentFn);
