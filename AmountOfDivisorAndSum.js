function solution(left, right) {
  let total = 0;

  for (let i = left; i <= right; i++) {
    let cnt = 0;
    let j = 1;
    while (j <= i) {
      if (i % j === 0) {
        cnt += 1;
      }
      j++;
    }
    if (cnt % 2 === 0) {
      total += i;
    } else {
      total -= i;
    }
  }

  return total;
}
