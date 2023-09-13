const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let N = Number(input);
let answer = Array.from(Array(N + 1), () => 0);
answer[2] = 1;
answer[3] = 1;

for (let i = 4; i <= N; i++) {
  answer[i] = answer[i - 1] + 1;

  if (i % 3 === 0) {
    answer[i] = Math.min(answer[i], answer[i / 3] + 1);
  }
  if (i % 2 === 0) {
    answer[i] = Math.min(answer[i], answer[i / 2] + 1);
  }
}

console.log(answer[N]);
