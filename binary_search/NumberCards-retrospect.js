const fs = require("fs");
const input2 = fs.readFileSync(0, "utf8").trim().split("\n");

const N2 = Number(input2[0]);
const cards22 = input2[1].split(" ").map(Number);
const M2 = Number(input2[2]);
const cards44 = input2[3].split(" ").map(Number);

// 1. 상근이의 카드를 Set 자료구조에 저장합니다. (시간 복잡도: O(N))
const cardSet = new Set(cards22);

const results = [];

// 2. 찾아야 할 카드 목록(cards2)을 순회합니다. (시간 복잡도: O(M))
for (let i = 0; i < M2; i++) {
  const target = cards44[i];

  // 3. Set에 해당 카드가 있는지 확인합니다. (시간 복잡도: O(1))
  if (cardSet.has(target)) {
    results.push(1);
  } else {
    results.push(0);
  }
}

console.log(results.join(" "));
