/**
 * Only x^2  input length, need to find second max for n + log2(n) - 2 comparisons
 */
export class SecondMax {
  find(numbers: number[]): number {
    let max = numbers[0];
    let secondMax: number = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i < numbers.length; i++) {
      const current = numbers[i];

      if (current >= max) {
        secondMax = max;
        max = current;

        continue;
      }

      if (current >= secondMax) {
        secondMax = current;
      }
    }

    return secondMax;
  }
}
