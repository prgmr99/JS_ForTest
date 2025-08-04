function solution(m, n, board) {
  // 1) 문자열 배열을 2차원 문자 배열로 변환
  const boardArr = board.map((row) => row.split(""));
  let totalRemoved = 0;

  while (true) {
    // 2) 지울 블록 표시용 2차원 불리언 배열
    const toRemove = Array.from({ length: m }, () => Array(n).fill(false));

    // 3) 2×2 블록 탐색
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (
          boardArr[i][j] &&
          boardArr[i][j + 1] === boardArr[i][j] &&
          boardArr[i + 1][j] === boardArr[i][j] &&
          boardArr[i + 1][j + 1] === boardArr[i][j]
        ) {
          toRemove[i][j] = true;
          toRemove[i][j + 1] = true;
          toRemove[i + 1][j] = true;
          toRemove[i + 1][j + 1] = true;
        }
      }
    }

    // 4) 표시된 블록 제거(=null 처리) 및 카운트
    let removedThisRound = 0;

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (toRemove[i][j]) {
          boardArr[i][j] = null;
          removedThisRound++;
        }
      }
    }

    // 더 이상 제거할 블록이 없으면 종료
    if (removedThisRound === 0) break;
    totalRemoved += removedThisRound;

    // 5) *** 중력 적용: 각 열마다 null이 아닌 블록만 모아 아래쪽부터 채우기
    for (let col = 0; col < n; col++) {
      const stack = [];

      for (let row = 0; row < m; row++) {
        if (boardArr[row][col] !== null) {
          stack.push(boardArr[row][col]);
        }
      }

      for (let row = m - 1; row >= 0; row--) {
        boardArr[row][col] = stack.length ? stack.pop() : null;
      }
    }
  }

  return totalRemoved;
}
