const fs = require("fs");

// 입력 처리
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const totalCount = Number(input[0]);
const numbers = input[1].split(" ").map(Number);

// 정렬 (투 포인터를 위한 준비)
numbers.sort((a, b) => a - b);

let goodNumberCount = 0;

for (let currentIndex = 0; currentIndex < totalCount; currentIndex++) {
  const target = numbers[currentIndex];

  let left = 0;
  let right = totalCount - 1;

  while (left < right) {
    // 자기 자신을 사용하지 않도록
    if (left === currentIndex) {
      left++;
      continue;
    }
    if (right === currentIndex) {
      right--;
      continue;
    }

    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      goodNumberCount++;
      break; // 이 수는 좋은 수임이 확인되었으므로 break
    } else if (sum < target) {
      left++; // 합이 작으면 더 큰 수를 위해 left++
    } else {
      right--; // 합이 크면 더 작은 수를 위해 right--
    }
  }
}

console.log(goodNumberCount);
