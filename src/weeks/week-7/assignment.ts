import _ from "lodash";
import fs from "fs";
import * as path from "path";

import {Assignment} from "../utils";
import {HeapHigh} from "./heap-high";
import {HeapLow} from "./heap-low";

const assignmentFn = () => {
  const assignmentFile = fs.readFileSync(path.join(__dirname, "../../misc/assignment-7.txt"));

  const numbers = assignmentFile
    .toString()
    .split("\n")
    .filter((e) => e !== "")
    .map(Number);
  () => numbers;

  // const numberss = [6331, 2793, 1640, 9290, 225, 625, 6195, 2303, 5685, 1354];
  const heapHigh = new HeapHigh();
  const heapLow = new HeapLow();
  const medians = [];
  let median = 0;

  for (const n of numbers) {
    const size = heapHigh.getSize() + heapLow.getSize();

    if (size === 0 || heapLow.getMax() > n) {
      heapLow.insert(n);
    } else {
      heapHigh.insert(n);
    }

    const sizeDiff = heapHigh.getSize() - heapLow.getSize();

    if (Math.abs(sizeDiff) > 1) {
      if (sizeDiff > 0) {
        heapLow.insert(heapHigh.extractMin()!);
      } else {
        heapHigh.insert(heapLow.extractMax()!);
      }
    }

    if (heapLow.getSize() >= heapHigh.getSize()) {
      median = heapLow.getMax()!;
    } else {
      median = heapHigh.getMin()!;
    }

    medians.push(median);
  }

  return {
    medians: _.sum(medians) % 10000,
    heapHigh,
    heapLow,
  };
};

export const seventhWeekAssignment = new Assignment("Median maintenance", assignmentFn);
