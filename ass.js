// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
  let i = 0;
  let j = A.length;
  let greenCount = 0;
  let redCount = 0;
  const passedIndexes = new Set();

  while (i < j) {
    if (!passedIndexes.has(i) && A[i] === X) {
      greenCount += 1;
    }

    if (!passedIndexes.has(j) && A[j] !== X) {
      redCount += 1;
    }

    passedIndexes.add(i);
    passedIndexes.add(j);

    if (greenCount === redCount) {
      i += 1;
      j -= 1;
    } else if (greenCount < redCount) {
      i += 1;
    } else {
      j -= 1;
    }
  }

  return i;
}

console.log(solution(6, [6, 6, 4, 3, 2, 6]));
