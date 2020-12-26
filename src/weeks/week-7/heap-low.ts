interface INumber {
  valueOf: () => number;
}

export class HeapLow<T extends INumber> {
  private heap: T[] = [];
  public size = 0;

  getSize() {
    return this.heap.length;
  }

  insertMany(values: T[]) {
    values.forEach((v) => this.insert(v));
  }

  insert(value: T) {
    this.heap.push(value);

    if (this.heap.length > 1) {
      let index = this.heap.length - 1;

      for (;;) {
        const parentIndex = Math.floor(index / 2);

        if (this.heap[parentIndex].valueOf() < value.valueOf()) {
          [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
          index = parentIndex;
        } else {
          break;
        }
      }
    }
  }

  getMax() {
    return this.heap[0];
  }

  extractMax() {
    if (this.heap.length === 0) {
      throw new Error("Empty heap");
    }

    const maximum = this.heap.shift();

    if (this.heap.length > 1) {
      this.heap.unshift(this.heap.pop()!);

      let index = 0;

      for (;;) {
        const leftSuccessorIndex = 2 * index;
        const rightSuccessorIndex = 2 * index + 1;

        let swapWithIndex;

        if (
          this.heap[rightSuccessorIndex] === undefined ||
          this.heap[leftSuccessorIndex] >= this.heap[rightSuccessorIndex]
        ) {
          swapWithIndex = leftSuccessorIndex;
        } else {
          swapWithIndex = rightSuccessorIndex;
        }

        if (this.heap[swapWithIndex] > this.heap[index]) {
          [this.heap[swapWithIndex], this.heap[index]] = [this.heap[index], this.heap[swapWithIndex]];

          index = swapWithIndex;
        } else {
          break;
        }
      }
    }

    return maximum;
  }
  toString() {
    return this.heap.join(",");
  }
}
