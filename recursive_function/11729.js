const fs = require("fs");
const N = parseInt(fs.readFileSync("/dev/stdin").toString());

const moves = [];

/**
 * 하노이 탑 재귀 함수
 * @param {number} n - 원판의 개수
 * @param {number} start - 시작 기둥
 * @param {number} to - 목표 기둥
 * @param {number} via - 보조 기둥
 */
function hanoi(n, start, to, via) {
  // 종료 조건: 원판이 1개일 때
  if (n === 1) {
    moves.push(`${start} ${to}`);
    return;
  }

  // 1. n-1개의 원판을 시작 기둥(start)에서 보조 기둥(via)으로 옮깁니다.
  hanoi(n - 1, start, via, to);

  // 2. 가장 큰 원판(n번째)을 시작 기둥(start)에서 목표 기둥(to)으로 옮깁니다.
  moves.push(`${start} ${to}`);

  // 3. 보조 기둥(via)에 있던 n-1개의 원판을 목표 기둥(to)으로 옮깁니다.
  hanoi(n - 1, via, to, start);
}

// 총 이동 횟수는 2^N - 1 입니다.
// N이 클 경우 숫자가 매우 커질 수 있으므로 BigInt를 사용합니다.
const count = BigInt(2) ** BigInt(N) - BigInt(1);

hanoi(N, 1, 3, 2);

console.log(count.toString());
console.log(moves.join("\n"));
