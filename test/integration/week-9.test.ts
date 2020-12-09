import { ninthWeekAssignmentFirst, ninthWeekAssignmentSecond } from "../../src/weeks";

describe("Week 9", () => {
  it("Assignment 1", async () => {
    const result = await ninthWeekAssignmentFirst.do();

    expect(result).toStrictEqual({
      decreasingDifferenceSum: 69119377652,
      decreasingRatioSum: 67311454237,
    });
  });

  it("Assignment 2", async () => {
    const result = await ninthWeekAssignmentSecond.do();

    expect(result).toBe(-3612829);
  });
});
