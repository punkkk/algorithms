import { seventhWeekAssignment } from "../../src/weeks";

describe("Week 7", () => {
  it("Assignment 1", async () => {
    const result = await seventhWeekAssignment.do();

    expect(result.medians).toBe(1213);
  });
});
