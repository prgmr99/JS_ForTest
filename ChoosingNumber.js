const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const numbers = input
  .slice(1, 1 + N)
  .map(Number)
  .sort((a, b) => a - b);

let leftPointer = 0;
let rightPointer = 0;
let minDiff = Infinity;

while (leftPointer < N && rightPointer < N) {
  const diff = numbers[rightPointer] - numbers[leftPointer];

  if (diff >= M) {
    minDiff = Math.min(minDiff, diff); // 후보 갱신
    leftPointer++; // 차이를 더 줄여보자
  } else {
    rightPointer++; // 차이가 부족 → 키워야 함
  }

  if (leftPointer === rightPointer) rightPointer++; // 같은 수 선택 허용 대비
}

console.log(minDiff);
