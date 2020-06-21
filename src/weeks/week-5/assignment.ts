import _ from "lodash";
import fs from "fs";
import * as path from "path";

import {Assignment} from "../utils";

const assignmentFn = () => {
  const assignmentFile = fs.readFileSync(path.join(__dirname, "../../misc/assignment-5.txt"));

  const vertices = _.mapValues(
    _.groupBy(
      assignmentFile
        .toString()
        .split("\n")
        .filter((e) => e !== ""),
      (str) => str.split(" ")[0],
    ),
    (strArr) => strArr.map((str) => str.split(" ")[1]),
  );

  return vertices["1"];
};

export const fifthWeekAssignment = new Assignment("SCCs of the graph", assignmentFn);
