// 입력받기
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input.shift());

// 문자열을 숫자타입으로 변경
let arr = input.map((v) => v.split(" ").map(Number));

// 1로 초기화된 N길이의 dp 배열
let dp = Array.from({ length: N }, () => 1);
let answer = 0;

// 오름차순 정렬
arr = arr.sort((a, b) => a[0] - b[0]);

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    // 오름차순으로 가장 긴 수열을 찾기 위한 과정
    if (arr[i][1] > arr[j][1]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

answer = N - Math.max(...dp);
console.log(answer);
