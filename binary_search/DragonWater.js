const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);
const numbers = input[1].split(" ").map(Number); // 2467은 입력이 오름차순으로 주어짐

let leftPointer = 0;
let rightPointer = N - 1;

let minimumValue = Infinity;
let answerLeft = numbers[leftPointer];
let answerRight = numbers[rightPointer];

while (leftPointer < rightPointer) {
  const sum = numbers[leftPointer] + numbers[rightPointer];
  const absSum = Math.abs(sum);

  if (absSum < minimumValue) {
    minimumValue = absSum;
    answerLeft = numbers[leftPointer];
    answerRight = numbers[rightPointer];
    if (minimumValue === 0) break; // 더 줄일 수 없음
  }

  if (sum > 0) {
    rightPointer--; // 합이 양수면 값을 줄여야 하므로 큰 쪽 감소
  } else {
    leftPointer++; // 합이 음수면 값을 키워야 하므로 작은 쪽 증가
  }
}

console.log(answerLeft, answerRight);
