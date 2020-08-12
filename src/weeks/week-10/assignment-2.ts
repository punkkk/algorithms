/* tslint:disable:no-bitwise */
import fs from "fs";
import * as path from "path";

import {Assignment} from "../utils";
import {UnionFind} from "./union-find";
import {Vertex} from "./vertex";

const generateNextPermutation = (value: number) => {
  const t = (value | (value - 1)) + 1;

  return t | ((((t & -t) / (value & -value)) >> 1) - 1);
};

const generatePermutations = (from: number, to: number) => {
  const result = [from];

  let previousValue = from;
  for (;;) {
    const nextPermutation = generateNextPermutation(previousValue);

    if (nextPermutation > to) {
      return result;
    }

    result.push(nextPermutation);

    previousValue = nextPermutation;
  }
};

const assignmentFn = () => {
  const assignmentFile = fs.readFileSync(path.join(__dirname, "../../misc/assignment-10-2.txt"));

  const [meta, ...vertices] = assignmentFile
    .toString()
    .split("\n")
    .filter((e) => e !== "")
    .map((v, i) => (i === 0 ? v : new Vertex(i, parseInt(v.replace(/ /g, ""), 2))));

  const [rowsCount, sizeOfRow] = (meta as string).split(" ");

  const unionFind = new UnionFind(parseInt(rowsCount, 10));
  const verticesByPosition = vertices.reduce((a, v) => {
    const vertex = v as Vertex;
    const samePositionVertices = a.get(vertex.position);

    if (samePositionVertices) {
      samePositionVertices.push(vertex);
    } else {
      a.set(vertex.position, [vertex]);
    }

    return a;
  }, new Map()) as Map<number, Vertex[]>;

  for (const verticesWithSamePosition of verticesByPosition.values()) {
    if (verticesWithSamePosition.length === 1) {
      continue;
    }

    const [toUnionWith, ...restVertices] = verticesWithSamePosition;

    restVertices.forEach((v) => unionFind.union(toUnionWith.index, v.index));
  }

  const distanceOneMasks: number[] = generatePermutations(
    1,
    parseInt(new Array(parseInt(sizeOfRow, 10)).fill("1").join(""), 2),
  );
  const distanceTwoMasks: number[] = generatePermutations(
    3,
    parseInt(new Array(parseInt(sizeOfRow, 10)).fill("1").join(""), 2),
  );

  for (const verticesWithSamePosition of verticesByPosition.values()) {
    const [toUnionWith] = verticesWithSamePosition;

    [...distanceOneMasks, ...distanceTwoMasks].forEach((mask) => {
      const verticesWithMaskDistance = verticesByPosition.get(toUnionWith.position ^ mask);

      if (verticesWithMaskDistance) {
        if (
          unionFind.find(toUnionWith.index) !== unionFind.find(verticesWithMaskDistance[0].index) ||
          unionFind.find(toUnionWith.index) === -1 ||
          unionFind.find(verticesWithMaskDistance[0].index) === -1
        ) {
          unionFind.union(toUnionWith.index, verticesWithMaskDistance[0].index);
        }
      }
    });
  }

  return {
    clusterCount: unionFind.size,
  };
};

export const tenthWeekAssignmentSecond = new Assignment("CLUSTERING BIG", assignmentFn);
