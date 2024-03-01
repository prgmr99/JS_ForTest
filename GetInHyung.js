const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
// result = 4;

const stack = [];

for (let k = 0; k < moves.length; k++) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 0) {
        continue;
      } else if (j !== moves[k] - 1) {
        continue;
      } else if (
        i === board.length - 1 &&
        j === moves[k] - 1 &&
        board[i][j] === 0
      ) {
        break;
      } else if (j === moves[k] - 1 && board[i][j] !== 0) {
        stack.push(board[i][j]);
        board[i][j] = 0;
      }
    }
  }
}
