function solution(absolutes, signs) {
  let sum = 0;
  for (let i = 0; i < signs.length; i++) {
    if (!signs[i]) {
      sum += absolutes[i] * -1;
    } else {
      sum += absolutes[i];
    }
  }
  return sum;
}
