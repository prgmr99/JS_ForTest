let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const str1 = input[0].split("");
const str2 = input[1].split("");
const len = str1.length;
const len2 = str2.length;
// 2차원 배열 생성

// 0으로 초기화
const DP = Array.from(Array(2000), () => Array());

// 모든 행, 열 0으로 초기화
for (let i = 0; i <= len; i++) {
  for (let j = 0; j <= len2; j++) {
    DP[i][j] = 0;
  }
}

for (let i = 1; i <= len; i++) {
  for (let j = 1; j <= len2; j++) {
    // i - 1, j - 1이 같은 경우,
    if (str1[i - 1] === str2[j - 1]) {
      // 대각선 왼쪽 위의 값에서 + 1
      DP[i][j] = DP[i - 1][j - 1] + 1;
    } else {
      // 아니면, [i][j - 1], [i - 1][j]의 값에서 큰 값 가져오기
      DP[i][j] = Math.max(DP[i][j - 1], DP[i - 1][j]);
    }
  }
}

console.log(DP[len][len2]);
