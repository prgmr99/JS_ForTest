const fs = require("fs");

// 파일에서 입력 데이터를 읽어옴
const input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");

const T = parseInt(input[0]); // 테스트 케이스의 수

for (let i = 1; i <= T; i++) {
  const K = parseInt(input[i * 2 - 1]); // 파일의 장 수
  const fileSizes = input[i * 2].split(" ").map(Number); // 파일 크기 배열

  const sum = [];
  for (let i = 1; i < K + 1; i++) {
    sum.push(input[i].split(" ").map(Number));
  }

  const DP = [];
  for (let i = 0; i < K; i++) {
    DP.push([]);
    for (let j = 0; j < K; j++) {
      DP[i].push(0);
    }
  }

  for (let size = 1; size < N; size++) {
    for (let start = 0; start < N - size; start++) {
      const end = start + size;

      let result = Infinity;
      for (let cut = start; cut < end; cut++) {
        result = Math.min(
          result,
          DP[start][cut] + DP[cut + 1][end] + sum[end] - sum[start - 1]
        );
      }
      DP[start][end] = result;
    }
  }
}

console.log(DP[0][-1]);
