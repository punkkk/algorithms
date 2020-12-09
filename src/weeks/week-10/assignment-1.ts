import fs from "fs";
import * as path from "path";

import { Assignment } from "../utils";
import { Edge } from "./edge";
import { UnionFind } from "./union-find";

const assignmentFn = () => {
  const assignmentFile = fs.readFileSync(path.join(__dirname, "../../misc/assignment-10-1.txt"));

  const [nodesCount, ...edges] = assignmentFile
    .toString()
    .split("\n")
    .filter((e) => e !== "")
    .map((v, i) => (i === 0 ? v : Edge.fromRaw(v.split(" "))));

  const unionFind = new UnionFind(parseInt(nodesCount as string, 10));
  const sortedEdges = (edges as Edge[]).sort((a, b) => a.weight - b.weight);

  for (; unionFind.size > 4; ) {
    const edge = sortedEdges.shift();

    if (edge == null) {
      throw new Error("your algorithm just as dumb as you are");
    }

    if (
      unionFind.find(edge.source) !== unionFind.find(edge.target) ||
      unionFind.find(edge.source) === -1 ||
      unionFind.find(edge.target) === -1
    ) {
      unionFind.union(edge.source, edge.target);
    }
  }

  let spacing = 0;

  for (const edge of sortedEdges) {
    if (
      unionFind.find(edge.source) !== unionFind.find(edge.target) &&
      unionFind.find(edge.source) !== edge.target &&
      unionFind.find(edge.target) !== edge.source
    ) {
      spacing = edge.weight;

      break;
    }
  }

  return {
    spacing,
  };
};

export const tenthWeekAssignmentFirst = new Assignment("CLUSTERING", assignmentFn);
