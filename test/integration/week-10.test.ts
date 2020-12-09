import { tenthWeekAssignmentFirst, tenthWeekAssignmentSecond } from "../../src/weeks";

describe("Week 10", () => {
  it("Assignment 1", async () => {
    const result = await tenthWeekAssignmentFirst.do();

    expect(result).toStrictEqual({
      spacing: 106,
    });
  });

  it("Assignment 2", async () => {
    const result = await tenthWeekAssignmentSecond.do();

    expect(result).toStrictEqual({ clusterCount: 6118 });
  });
});
