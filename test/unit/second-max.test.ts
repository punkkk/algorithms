import casual from "casual";
import {SecondMax} from "../../src/optional";

const getLength = (max: number = 100) => casual.integer(1, Math.floor(max / 2)) * 2;
const randomExcept = (x: number, max: number): number => {
  const y = casual.integer(0, max - 1);

  if (y !== x) {
    return y;
  }

  return randomExcept(x, max);
};

describe("SecondMax", () => {
  it("should find second biggest number", () => {
    const secondMax = new SecondMax();
    const length = getLength();
    const numbers = new Array(length).fill("").map(() => casual.integer(1, 10e3));

    const first = casual.integer(10e4, 10e5);
    const second = casual.integer(10e3, 10e4);

    const firstIndex = casual.integer(0, length - 1);
    const secondIndex = randomExcept(firstIndex, length - 1);

    numbers[firstIndex] = first;
    numbers[secondIndex] = second;

    expect(secondMax.find(numbers)).toEqual(second);
  });
});
