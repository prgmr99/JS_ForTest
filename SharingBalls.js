function solution(balls, share) {
  let answer = BigInt(1);
  for (let i = 1; i <= balls; i++) {
    answer *= BigInt(i);
  }

  for (let i = 1; i <= share; i++) {
    answer /= BigInt(i);
  }

  for (let i = 1; i <= balls - share; i++) {
    answer /= BigInt(i);
  }

  return answer;
}
