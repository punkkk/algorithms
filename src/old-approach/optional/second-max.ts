/**
 * Only x^2  input length, need to find second max for n + log(n) - 2 comparisons
 */
export class SecondMax {
  find(numbers: number[]): number {
    const [, comparedTo] = this.findMax(numbers);
    const [secondMax] = this.findMax(comparedTo);

    return secondMax;
  }

  findMax(numbers: number[]): [number, number[]] {
    if (numbers.length === 1) {
      return [numbers[0], []];
    }

    const middleIndex = numbers.length / 2;

    const [leftHighest, leftComparedTo] = this.findMax(numbers.slice(0, middleIndex));
    const [rightHighest, rightComparedTo] = this.findMax(numbers.slice(middleIndex, numbers.length));

    return leftHighest > rightHighest
      ? [leftHighest, leftComparedTo.concat(rightHighest)]
      : [rightHighest, rightComparedTo.concat(leftHighest)];
  }
}
