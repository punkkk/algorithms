import _ from "lodash";
import fs from "fs";
import * as path from "path";

import { Assignment } from "../utils";
import { Job } from "./job";

const byDifference = (j1: Job, j2: Job) => {
  const j1Diff = j1.weight - j1.length;
  const j2Diff = j2.weight - j2.length;

  if (j1Diff === j2Diff) {
    return j2.weight - j1.weight;
  }

  return j2Diff - j1Diff;
};

const byRatio = (j1: Job, j2: Job) => {
  const j1Diff = j1.weight / j1.length;
  const j2Diff = j2.weight / j2.length;

  return j2Diff - j1Diff;
};

const getWeightedCompletionTime = (jobs: Job[]) => {
  return jobs.reduce(
    (acc, job) => {
      const newCompletionTime = (acc.completionTime += job.length);

      return {
        completionTime: newCompletionTime,
        sum: acc.sum += newCompletionTime * job.weight,
      };
    },
    { completionTime: 0, sum: 0 },
  ).sum;
};

const assignmentFn = () => {
  const assignmentFile = fs.readFileSync(path.join(__dirname, "../../misc/assignment-9-1.txt"));

  const fileContent = assignmentFile
    .toString()
    .split("\n")
    .filter((e) => e !== "");
  const jobs = _.takeRight(fileContent, fileContent.length - 1).map(Job.createFromString);

  return {
    decreasingDifferenceSum: getWeightedCompletionTime(jobs.sort(byDifference)),
    decreasingRatioSum: getWeightedCompletionTime(jobs.sort(byRatio)),
  };
};

export const ninthWeekAssignmentFirst = new Assignment("SCHEDULE PROBLEM", assignmentFn);
