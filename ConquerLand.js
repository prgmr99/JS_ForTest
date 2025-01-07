function solution(land) {
  let sum = 0;
  let previousIndex = -1;

  for (let i = 0; i < land.length; i++) {
    let max = -1;
    let currentIndex = -1;

    for (let j = 0; j < 4; j++) {
      if (land[i][j] > max && j !== previousIndex) {
        max = land[i][j];
        currentIndex = j;
      }
    }

    sum += max;
    previousIndex = currentIndex;
  }

  return sum;
}

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
); // 16
