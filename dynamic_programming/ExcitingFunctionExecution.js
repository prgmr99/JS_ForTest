const fs = require("fs");

const lines = fs.readFileSync(0, "utf8").trim().split("\n");

const triples = [];

for (const line of lines) {
  const [num1, num2, num3] = line.trim().split(" ").map(Number);

  if (num1 === -1 && num2 === -1 && num3 === -1) break;

  triples.push([num1, num2, num3]);
}

const MIN = -50;
const MAX = 50;

// * Core Idea: 음수까지 고려한다면, 이동해서 0 이상의 값으로 변환한다.
const SIZE = MAX - MIN + 1; // 101
const SHIFT = -MIN; // 50

// * 3차원 메모 테이블: memo[a+SHIFT][b+SHIFT][c+SHIFT]
const memo = Array.from({ length: SIZE }, () =>
  Array.from({ length: SIZE }, () => Array(SIZE).fill(undefined))
);

// * 재귀함수
function w(a, b, c) {
  // * 핵심 로직은 친절하게 문제에서 알려주어서 쉬운 문제로 집계됨.
  // * 어려운 문제일 수록 점화식을 스스로 유도해야 함.
  if (a <= 0 || b <= 0 || c <= 0) return 1;
  if (a > 20 || b > 20 || c > 20) return w(20, 20, 20);

  if (memo[a + SHIFT][b + SHIFT][c + SHIFT] !== undefined) {
    return memo[a + SHIFT][b + SHIFT][c + SHIFT];
  }

  if (a < b && b < c) {
    memo[a + SHIFT][b + SHIFT][c + SHIFT] =
      w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
  } else {
    memo[a + SHIFT][b + SHIFT][c + SHIFT] =
      w(a - 1, b, c) +
      w(a - 1, b - 1, c) +
      w(a - 1, b, c - 1) -
      w(a - 1, b - 1, c - 1);
  }

  return memo[a + SHIFT][b + SHIFT][c + SHIFT];
}

const results = triples.map(
  ([a, b, c]) => `w(${a}, ${b}, ${c}) = ${w(a, b, c)}`
);

console.log(results.join("\n"));
