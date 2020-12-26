import { eleventhWeekAssignmentFirst } from "../../src/weeks";

describe("Week 11", () => {
  it("Assignment 1", async () => {
    const result = await eleventhWeekAssignmentFirst.do([5, 0.32, 0.25, 0.2, 0.18, 0.05]);

    expect(result).toStrictEqual({
      maxLength: 3,
    });
  });
});
