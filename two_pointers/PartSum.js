const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, S] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);

let left = 0;
let right = 0;
let sum = 0;
let minLen = Infinity;

while (true) {
  if (sum >= S) {
    minLen = Math.min(minLen, right - left);
    sum -= numbers[left++];
  } else if (right === N) {
    break;
  } else {
    sum += numbers[right++];
  }
}

console.log(minLen === Infinity ? 0 : minLen);
