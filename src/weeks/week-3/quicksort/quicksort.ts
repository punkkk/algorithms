export class Quicksort {
  sort(array: number[], left = 0, right = array.length - 1): number[] {
    if (array.length === 1) {
      return array;
    }

    const p = this.partition(array, left, right);

    if (left < p - 1) {
      this.sort(array, left, p - 1);
    }

    if (p < right) {
      this.sort(array, p, right);
    }

    return array;
  }

  partition(array: number[], left: number, right: number) {
    const pivot = array[Math.floor(left + (right - left) / 2)];

    let i = left;
    let j = right;

    while (i <= j) {
      while (array[i] < pivot) {
        i += 1;
      }

      while (array[j] > pivot) {
        j -= 1;
      }

      if (i <= j) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;

        i++;
        j--;
      }
    }

    return i;
  }
}
