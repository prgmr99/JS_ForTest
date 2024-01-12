function solution(n) {
  for (let i = 1; i < n; i++) {
    const temp = n;
    if (temp % i === 1) {
      return i;
      break;
    }
    continue;
  }
}
