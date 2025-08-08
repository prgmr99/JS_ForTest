const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const numbers = input[1].split(" ").map(Number);
const x = Number(input[2]);

let count = 0;

numbers.sort((a, b) => a - b);

let left = 0;
let right = N - 1;

while (left < right) {
  const sum = numbers[left] + numbers[right];

  if (sum === x) {
    count++;
    left++;
    right--;
  } else if (sum < x) {
    left++;
  } else {
    right--;
  }
}

console.log(count);
