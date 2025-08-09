const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const students = input[1].split(" ").map(Number);

students.sort((a, b) => a - b);

let teamCount = 0;

const twoPointer = (target, start, end) => {
  let left = start;
  let right = end;

  while (left <= right) {
    const sum = students[left] + students[right] + target;

    if (sum < 0) left += 1;
    else if (sum > 0) right -= 1;
    else {
      if (students[left] === students[right]) {
        teamCount += ((right - left) * (right - left + 1)) / 2;
        break;
      }

      let leftCnt = 1;
      while (left + 1 < right && students[left] === students[left + 1]) {
        left += 1;
        leftCnt += 1;
      }

      let rightCnt = 1;
      while (right - 1 > left && students[right] === students[right - 1]) {
        right -= 1;
        rightCnt += 1;
      }

      teamCount += leftCnt * rightCnt;
      left += 1;
      right -= 1;
    }
  }
};

for (let i = 0; i < N - 2; i++) {
  twoPointer(students[i], i + 1, N - 1);
}

console.log(teamCount);
