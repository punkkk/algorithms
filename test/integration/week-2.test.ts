import { secondAssignment } from "../../src/weeks";

describe("Week 2", () => {
  it("Assignment 1 (2)", async () => {
    const result = await secondAssignment.do();

    expect(result).toBe(2407905288);
  });
});
