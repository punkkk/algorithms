import { eleventhWeekAssignmentFirst, eleventhWeekAssignmentSecond } from "../../src/weeks";

describe("Week 11", () => {
  describe("Assignment 1", () => {
    it("Problem set data", async () => {
      const result = await eleventhWeekAssignmentFirst.do([5, 32, 25, 20, 18, 5]);

      expect(result).toHaveProperty("maxLength", 3);
      expect(result).toHaveProperty("minLength", 2);
    });

    describe("Assignment data", () => {
      it("max length", async () => {
        const result = await eleventhWeekAssignmentFirst.do();

        expect(result).toHaveProperty("maxLength", 19);
      });

      it("min length", async () => {
        const result = await eleventhWeekAssignmentFirst.do();

        expect(result).toHaveProperty("minLength", 9);
      });
    });
  });

  describe("Assignment 2", () => {
    it("Mock set data", async () => {
      const result = await eleventhWeekAssignmentSecond.do([4, 1, 4, 5, 4]);

      expect(result).toHaveProperty("bitmap", [0, 1, 0, 1]);
    });

    it("Assignment data", async () => {
      const result = await eleventhWeekAssignmentSecond.do();

      expect(result).toHaveProperty("bitmap", [0, 1, 0, 1]);
    });
  });
});
