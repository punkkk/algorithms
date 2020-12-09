import { sixthWeekAssignment } from "../../src/weeks";

describe("Week 6", () => {
  it("Assignment 1", async () => {
    const result = await sixthWeekAssignment.do();

    expect(result).toStrictEqual([2599, 2610, 2947, 2052, 2367, 2399, 2029, 2442, 2505, 3068]);
  });
});
