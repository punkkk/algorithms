import { fifthWeekAssignment } from "../../src/weeks";

describe("Week 5", () => {
  it("Assignment 1", async () => {
    const result = await fifthWeekAssignment.do();

    expect(result).toStrictEqual([434821, 968, 459, 313, 211]);
  });
});
