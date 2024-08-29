function solution(n, left, right) {
  const arr = [];

  for (let i = left; i < right + 1; i++) {
    const x = i % n;
    const y = Math.floor(i / n);

    if (x === n - 1) {
      arr.push(n);
    } else if (y === n - 1) {
      arr.push(n);
    } else if (x === y) {
      arr.push(x + 1);
    } else if (x === 0) {
      arr.push(y + 1);
    } else if (y === 0) {
      arr.push(x + 1);
    } else if (x > y) {
      arr.push(x + 1);
    } else if (x < y) {
      arr.push(y + 1);
    }
  }

  return arr;
}

// 개선한 코드
function solution(n, left, right) {
  const result = [];

  for (let i = left; i <= right; i++) {
    // i번째 값이 속한 (i/n)행과 (i%n)열에서의 값은 max(row, col) + 1
    const row = Math.floor(i / n);
    const col = i % n;
    result.push(Math.max(row, col) + 1);
  }

  return result;
}
