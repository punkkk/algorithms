import { eighthWeekAssignment } from "../../src/weeks";

describe("Week 8", () => {
  it("Assignment 1", async () => {
    const result = await eighthWeekAssignment.do([1, 2, 3, 4], 3, 4);

    expect(result).toBe(2);
  });

  // it takes tooooooooooooooo looooooooooooooooooooooong time for real assignment
  it.skip("Assignment 1 (actual assignment data)", async () => {
    const result = await eighthWeekAssignment.do();

    expect(result).toBe(427);
  });
});
