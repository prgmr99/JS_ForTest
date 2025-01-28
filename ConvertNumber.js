// x = 10, y = 40, n = 5
// result = 2

// 자연수 x를 y로 변환하려고 합니다. 사용할 수 있는 연산은 다음과 같습니다.

// x에 n을 더합니다
// x에 2를 곱합니다.
// x에 3을 곱합니다.
// 자연수 x, y, n이 매개변수로 주어질 때, x를 y로 변환하기 위해 필요한 최소 연산 횟수를 return하도록 solution 함수를 완성해주세요.
// 이때 x를 y로 만들 수 없다면 -1을 return 해주세요.

// DP로 풀어야 할 것 같다.

function solution(x, y, n) {
  const dp = new Array(10001).fill(0);

  dp[x] = 0;

  while (!dp.includes(y)) {
    for (let i = 0; i < dp.length; i++) {
      if (i === x * 2) {
        dp[i] += 1;
      }

      if (i === x * 3) {
        dp[i] += 1;
      }

      if (i === x + n) {
        dp[i] += 1;
      }
    }
  }

  dp.filter((el) => el !== 0).sort((a, b) => a - b);

  return dp[0];
}

console.log(solution(10, 40, 5)); // 2
console.log(solution(10, 40, 30)); // 1
