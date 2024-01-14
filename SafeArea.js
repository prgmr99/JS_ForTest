// 이후에 DP 문제를 풀때 중요한 요소가 많음.

function solution(board) {
  let answer = 0;

  // 방향 초기화하기 -> 이후에 반복문으로 각 부분 확인가능
  const danger = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) {
        danger.forEach((v) => {
          let [x, y] = v;
          [x, y] = [x + i, y + j];

          // 범위(지역)을 벗어나는 것이 아닌지 확인하기
          if (
            x >= 0 &&
            x < board.length &&
            y >= 0 &&
            y < board.length &&
            board[x][y] === 0
          ) {
            board[x][y] = 2;
          }
        });
      }
    }
  }

  board.map((v1) => v1.map((v2) => (v2 == 0 ? answer++ : 0)));
  return answer;
}
