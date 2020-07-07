// import _ from "lodash";
import fs from "fs";
import * as path from "path";

import {Assignment} from "../utils";
import {Edge} from "./edge";
import {Heap} from "./heap";

const assignmentFn = () => {
  const assignmentFile = fs.readFileSync(path.join(__dirname, "../../misc/assignment-9-2.txt"));
  () => assignmentFile;

  const adjacentList: Map<string, Edge[]> = new Map(new Array(500).fill(0).map((v, i) => [String(i + 1), []])) as any;

  assignmentFile
    .toString()
    .split("\n")
    .filter((e) => e !== "")
    .map((str) => {
      return str.split(" ");
    })
    .filter((numbers) => numbers.length > 2)
    .forEach(([vertex, targetVertex, weight]) => {
      const currentEdges = adjacentList.get(vertex)!;
      const targetEdges = adjacentList.get(targetVertex)!;

      adjacentList.set(vertex, [...currentEdges, new Edge(parseInt(weight, 10), targetVertex)]);
      adjacentList.set(targetVertex, [...targetEdges, new Edge(parseInt(weight, 10), vertex)]);
    });

  const edges = new Heap();
  const startVertex = "1";
  const passedVertices: Set<string> = new Set([startVertex]);
  const minimumSpanningTreeEdges = [];

  edges.insertMany(adjacentList.get(startVertex)!);

  for (; edges.getSize() > 0; ) {
    const minEdge = edges.extractMin()!;

    if (passedVertices.has(minEdge.targetVertex)) {
      continue;
    }

    passedVertices.add(minEdge.targetVertex);

    const targetVertexEdges = adjacentList.get(minEdge.targetVertex)! || [];

    edges.insertMany(targetVertexEdges);

    minimumSpanningTreeEdges.push(minEdge.weight);
  }

  return minimumSpanningTreeEdges.reduce((acc, w) => acc + w, 0);
};

export const ninthWeekAssignmentSecond = new Assignment("PRIM ALGORITHM", assignmentFn);
