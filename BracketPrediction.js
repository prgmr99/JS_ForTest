function solution(n, a, b) {
  let round = 0;

  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    round++;
  }

  return round;
}

// a와 b가 같아질 때까지 반복문을 돌리면서 round를 증가시킨다.
