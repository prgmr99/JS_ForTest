function solution(n, m, section) {
  let answer = 0;

  // 현재까지 칠한 구역
  let part = 0;

  // section을 forEach() 메서드로 하나씩 확인한다.
  section.forEach((n) => {
    // 현재 구역이 현재까지 칠한 구역보다 크다면
    if (n > part) {
      // 구역을 칠해주고 현재까지 칠한 구역을 업데이트 시켜준다.
      part = n + m - 1;

      // 페인트를 칠했으니 1증가 시킨다.
      answer++;
    }
  });

  return answer;
}
