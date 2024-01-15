function solution(x) {
  const hashadNum = x
    .toString()
    .split("")
    .map((e) => Number(e));
  let sum = 0;
  hashadNum.map((e) => (sum += e));

  if (x % sum === 0) {
    return true;
  }
  return false;
}
