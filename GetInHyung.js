function solution(board, moves) {
  const stack = [];
  let cnt = 0;

  first: for (let k = 0; k < moves.length; k++) {
    second: for (let i = 0; i < board.length; i++) {
      third: for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === 0) {
          continue;
        } else if (j !== moves[k] - 1) {
          continue;
        } else if (
          i === board.length - 1 &&
          j === moves[k] - 1 &&
          board[i][j] === 0
        ) {
          break second;
        } else if (j === moves[k] - 1 && board[i][j] !== 0) {
          if (stack[stack.length - 1] === board[i][j]) {
            stack.pop();
            cnt += 2;
          } else {
            stack.push(board[i][j]);
          }
          board[i][j] = 0;
          break second;
        }
      }
    }
  }
  return cnt;
}

// 다른 사람 풀이 1
function solution(board, moves) {
  var count = 0;
  var stack = [];

  for (var i = 0; i < moves.length; i++) {
    var now = moves[i] - 1;
    for (var j = 0; j < board.length; j++) {
      if (board[j][now] != 0) {
        if (stack[stack.length - 1] === board[j][now]) {
          stack.pop();
          count += 2;
        } else {
          stack.push(board[j][now]);
        }
        board[j][now] = 0;
        break;
      }
    }
  }
  console.log(stack);
  return count;
}

// 디른 사람 풀이 2
const transpose = (matrix) =>
  matrix.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    []
  );

const solution = (board, moves) => {
  const stacks = transpose(board).map((row) =>
    row.reverse().filter((el) => el !== 0)
  );
  const basket = [];
  let result = 0;

  for (const move of moves) {
    const pop = stacks[move - 1].pop();
    if (!pop) continue;
    if (pop === basket[basket.length - 1]) {
      basket.pop();
      result += 2;
      continue;
    }
    basket.push(pop);
  }

  return result;
};
