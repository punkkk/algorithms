// import _ from "lodash";
// import fs from "fs";
// import * as path from "path";

import {Assignment} from "../utils";
import {DfsSccs} from "./dfs-sccs";

const assignmentFn = () => {
  // const assignmentFile = fs.readFileSync(path.join(__dirname, "../../misc/assignment-5.txt"));
  //
  // const vertices = _.mapValues(
  //   _.groupBy(
  //     assignmentFile
  //       .toString()
  //       .split("\n")
  //       .filter((e) => e !== ""),
  //     (str) => str.split(" ")[0],
  //   ),
  //   (strArr) => strArr.map((str) => str.split(" ")[1]),
  // );
  const dfsSccs = new DfsSccs(
    new Map([
      [1, [2, 3, 4]],
      [2, []],
      [3, []],
      [4, [2, 3]],
    ]),
  );
  return dfsSccs.getReversed();
};

export const fifthWeekAssignment = new Assignment("SCCs of the graph", assignmentFn);
