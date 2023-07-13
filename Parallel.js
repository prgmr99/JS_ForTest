function solution(dots) {
  let cnt = 0;
  const result = [];

  result.push([
    (dots[0][1] - dots[1][1]) / (dots[0][0] - dots[1][0]),
    (dots[2][1] - dots[3][1]) / (dots[2][0] - dots[3][0]),
  ]);
  result.push([
    (dots[0][1] - dots[2][1]) / (dots[0][0] - dots[2][0]),
    (dots[1][1] - dots[3][1]) / (dots[1][0] - dots[3][0]),
  ]);
  result.push([
    (dots[0][1] - dots[3][1]) / (dots[0][0] - dots[3][0]),
    (dots[1][1] - dots[2][1]) / (dots[1][0] - dots[2][0]),
  ]);

  for (let i = 0; i < result.length; i++) {
    if (result[i][0] === result[i][1]) {
      cnt = 1;
    }
  }
  return cnt;
}

solution([
  [1, 4],
  [9, 2],
  [3, 8],
  [11, 6],
]);
