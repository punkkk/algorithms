import _ from "lodash";
import fs from "fs";
import * as path from "path";

import {Assignment} from "../utils";

const assignmentFn = () => {
  const assignmentFile = fs.readFileSync(path.join(__dirname, "../../misc/assignment-10-1.txt"));

  const fileContent = assignmentFile
    .toString()
    .split("\n")
    .filter((e) => e !== "");

  return {
    fileContent,
  };
};

export const tenthWeekAssignmentFirst = new Assignment("CLUSTERING", assignmentFn);
