"use strict";
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = Number(input[0]);
const matrix = [];
for (let i = 1; i < N + 1; i++) {
  matrix.push(input[i].split(" ").map(Number));
}

const DP = [];
for (let i = 0; i < N; i++) {
  DP.push([]);
  for (let j = 0; j < N; j++) {
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
        DP[start][cut] +
          DP[cut + 1][end] +
          matrix[start][0] * matrix[cut][1] * matrix[end][1]
      );
    }
    DP[start][end] = result;
  }
}

console.log(DP[0][N - 1]);
