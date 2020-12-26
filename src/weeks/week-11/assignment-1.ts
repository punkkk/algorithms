import fs from "fs";
import * as path from "path";

import { Assignment } from "../utils";
import { HeapHigh } from "../week-7/heap-high";
import { BaseSymbol } from "./base-symbol";
import { ISymbol } from "./types";
import { MergedSymbol } from "./merged-symbol";
import { Leaf } from "./leaf";

const assignmentFn = (input: number[]) => {
  const assignmentFile = fs.readFileSync(path.join(__dirname, "../../misc/assignment-11-1.txt"));

  const [, ...symbolsWeight] =
    input ||
    assignmentFile
      .toString()
      .split("\n")
      .filter((e) => e !== "")
      .map((v) => parseInt(v, 10));
  const heapHigh = new HeapHigh<ISymbol>();

  heapHigh.insertMany(symbolsWeight.map((weight) => new BaseSymbol(weight)));

  // merge
  for (; heapHigh.getSize() > 2; ) {
    const [firstMin, secondMin] = [heapHigh.extractMin(), heapHigh.extractMin()] as ISymbol[];

    heapHigh.insert(new MergedSymbol([firstMin, secondMin]));
  }

  const symbols = heapHigh.toArray();

  const root = new Leaf({
    value: new BaseSymbol(0),
  });

  // todo probably need a tree class
  root.left = new Leaf({ value: symbols[0] });
  root.right = new Leaf({ value: symbols[1] });

  root.left.unmerge();
  root.right.unmerge();

  return {
    // -1 due to the fact I count the root level
    maxLength: root.maxDepth() - 1,
    minLength: root.minDepth() - 1,
  };
};

export const eleventhWeekAssignmentFirst = new Assignment("HUFFMAN", assignmentFn);
