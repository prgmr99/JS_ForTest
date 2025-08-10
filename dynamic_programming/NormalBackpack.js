"use strict";
const fs = require("fs");

// 입력 파싱
const inputLines = fs.readFileSync(0, "utf8").trim().split("\n");
const [itemCount, capacity] = inputLines[0].split(" ").map(Number);

// 물건 목록: [weight, value]
const itemList = [];
for (let lineIndex = 1; lineIndex <= itemCount; lineIndex++) {
  const [weight, value] = inputLines[lineIndex].trim().split(" ").map(Number);
  itemList.push([weight, value]);
}

/**
 * dpTable[i][w] = 앞에서 i개 물건만 고려했을 때,
 *                 가방 용량 w로 만들 수 있는 최대 가치
 */
const dpTable = Array.from({ length: itemCount + 1 }, () =>
  Array(capacity + 1).fill(0)
);

// DP 채우기
for (let itemIndex = 1; itemIndex <= itemCount; itemIndex++) {
  const [itemWeight, itemValue] = itemList[itemIndex - 1];

  for (let currCapacity = 0; currCapacity <= capacity; currCapacity++) {
    // 담을 수 없으면 이전 상태 그대로
    if (currCapacity < itemWeight) {
      dpTable[itemIndex][currCapacity] = dpTable[itemIndex - 1][currCapacity];
      continue;
    }

    // 담지 않는 경우 vs 담는 경우 중 최대값
    const skipItem = dpTable[itemIndex - 1][currCapacity];
    const takeItem =
      dpTable[itemIndex - 1][currCapacity - itemWeight] + itemValue;

    dpTable[itemIndex][currCapacity] = Math.max(skipItem, takeItem);
  }
}

// 정답 출력
console.log(dpTable[itemCount][capacity].toString());
