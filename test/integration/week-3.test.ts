import { thirdWeekAssignmentFirst, thirdWeekAssignmentSecond, thirdWeekAssignmentThird } from "../../src/weeks";

describe("Week 3", () => {
  it("Assignment 1", async () => {
    const result = await thirdWeekAssignmentFirst.do();

    expect(result).toBe(162085);
  });

  it("Assignment 2", async () => {
    const result = await thirdWeekAssignmentSecond.do();

    expect(result).toBe(164123);
  });

  it("Assignment 3", async () => {
    const result = await thirdWeekAssignmentThird.do();

    expect(result).toBe(138382);
  });
});
