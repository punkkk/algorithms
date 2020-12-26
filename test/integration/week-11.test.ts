import { eleventhWeekAssignmentFirst } from "../../src/weeks";

describe("Week 11", () => {
  describe("Assignment 1", () => {
    it("Problem set data", async () => {
      const result = await eleventhWeekAssignmentFirst.do([5, 32, 25, 20, 18, 5]);

      expect(result).toHaveProperty("maxLength", 3);
      expect(result).toHaveProperty("minLength", 1);
    });

    describe("Assignment data", () => {
      it("max length", async () => {
        const result = await eleventhWeekAssignmentFirst.do();

        expect(result).toHaveProperty("maxLength", 19);
      });

      it("min length", async () => {
        const result = await eleventhWeekAssignmentFirst.do();

        expect(result).toHaveProperty("minLength", 19);
      });
    });
  });
});
