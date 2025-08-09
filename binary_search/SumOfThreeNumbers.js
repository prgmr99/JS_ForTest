"use strict";
const fs = require("fs");

// 입력: 첫 줄 N, 이후 N개의 수
const tokens = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);
const n = tokens[0];
const numbers = tokens.slice(1, 1 + n).sort((a, b) => a - b);

// (i <= j) 모든 쌍의 합을 Set에 저장
const pairSums = new Set();
for (let i = 0; i < n; i++) {
  for (let j = i; j < n; j++) {
    pairSums.add(numbers[i] + numbers[j]);
  }
}

// 대안 3: 플래그로 이중 루프 탈출
let answer = -1;
let found = false;

for (let k = n - 1; k >= 0 && !found; k--) {
  const candidateK = numbers[k]; // k = a + b + c
  for (let c = 0; c <= k; c++) {
    const neededPair = candidateK - numbers[c]; // a + b
    if (pairSums.has(neededPair)) {
      answer = candidateK; // 가장 큰 k부터 내려오므로 첫 발견이 정답
      found = true;
      break;
    }
  }
}

console.log(answer.toString());
