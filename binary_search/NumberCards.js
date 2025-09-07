const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);
const cards = input[1].split(" ").map(Number);
const M = Number(input[2]);
const cards2 = input[3].split(" ").map(Number);

const result = [];

for (let i = 0; i < M; i++) {
  const target = cards2[i];
  let start = 0;
  let end = N - 1;
  let found = false;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (cards[mid] === target) {
      found = true;
      break;
    } else if (cards[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  result.push(found ? 1 : 0);
}

console.log(result.join(" "));
