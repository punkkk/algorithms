import { fourthWeekAssignment } from "../../src/weeks";

describe("Week 4", () => {
  it("Assignment 1", async () => {
    const result = await fourthWeekAssignment.do();

    expect(result).toBe(17);
  });
});
