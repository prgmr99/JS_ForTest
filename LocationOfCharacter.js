const key = {
  left: [-1, 0],
  right: [1, 0],
  up: [0, 1],
  down: [0, -1],
};

const isValidLocation = (
  nowRIdx,
  nowCIdx,
  minRIdx,
  maxRIdx,
  minCIdx,
  maxCIdx
) => {
  return (
    minRIdx <= nowRIdx &&
    nowRIdx <= maxRIdx &&
    minCIdx <= nowCIdx &&
    nowCIdx <= maxCIdx
  );
};

function solution(keyinput, board) {
  let rIdx = 0,
    cIdx = 0;
  const minRIdx = -Math.floor(board[0] / 2),
    maxRIdx = Math.floor(board[0] / 2);
  const minCIdx = -Math.floor(board[1] / 2),
    maxCIdx = Math.floor(board[1] / 2);

  keyinput.forEach((value) => {
    const [x, y] = key[value];
    const newRIdx = rIdx + x;
    const newCIdx = cIdx + y;

    if (isValidLocation(newRIdx, newCIdx, minRIdx, maxRIdx, minCIdx, maxCIdx)) {
      rIdx = newRIdx;
      cIdx = newCIdx;
    }
  });
  return [rIdx, cIdx];
}
