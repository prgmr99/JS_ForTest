const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const expenses = input.slice(1).map(Number);

// K의 최소, 최대 설정
let low = Math.max(...expenses); // 하루 최대 소비 금액
let high = expenses.reduce((a, b) => a + b, 0); // 모든 날 합
let answer = high;

// K로 며칠 버틸 수 있는지 체크하는 함수
function canSurvive(K) {
  let count = 1; // 첫 인출
  let money = K;

  for (let cost of expenses) {
    if (money < cost) {
      // 새로 인출
      count++;
      money = K;
    }
    money -= cost;
  }

  return count <= M;
}

// 이분 탐색
while (low <= high) {
  const mid = Math.floor((low + high) / 2);
  if (canSurvive(mid)) {
    answer = mid;
    high = mid - 1;
  } else {
    low = mid + 1;
  }
}

console.log(answer);
