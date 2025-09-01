const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [K, N] = input[0].split(" ").map(Number);
// 1. 입력 처리 수정: input 배열의 두 번째 요소부터 끝까지를 숫자로 변환
const numbers = input.slice(1).map(Number);

// 2. 탐색 범위 수정: 가장 긴 랜선을 end로 설정
numbers.sort((a, b) => a - b);

let start = 1;
let end = numbers[numbers.length - 1];

let result = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);

  // mid가 0이 되는 경우를 방지 (매우 긴 랜선 하나만 있을 때 발생 가능)
  if (mid === 0) {
    start = 1;
    continue;
  }

  const count = numbers
    .map((num) => Math.floor(num / mid))
    .reduce((a, b) => a + b, 0);

  // 3. 이진 탐색 로직 수정
  if (count >= N) {
    // N개 이상 만들 수 있다면, 길이를 더 늘려본다.
    // 현재 mid는 가능한 길이이므로 result에 저장한다.
    result = mid;
    start = mid + 1;
  } else {
    // N개만큼 만들 수 없다면, 길이를 더 줄여야 한다.
    end = mid - 1;
  }
}

console.log(result);
