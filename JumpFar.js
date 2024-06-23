function solution(n) {
  // 다이내믹 프로그래밍
  const MOD = 1234567;
  let ways = new Array(n + 1).fill(0);

  // 초기값 설정
  ways[0] = 1; // 숫자 0을 만드는 방법은 아무것도 선택하지 않는 것 1가지 방법
  ways[1] = 1;

  // 2부터 n까지 순회하면서 경우의 수를 구합니다.
  for (let i = 2; i <= n; i++) {
    ways[i] = (ways[i - 1] + ways[i - 2]) % 1234567;
  }

  // 숫자 n을 만드는 경우의 수를 반환합니다.
  return ways[n];
}
