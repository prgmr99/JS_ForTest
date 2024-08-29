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
