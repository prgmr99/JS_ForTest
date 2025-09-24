const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let N = +input[0];
let targetRow = +input[1];
let targetCol = +input[2];

/**
 * Z 문제 재귀 함수 (분할 정복)
 * @param {number} r - 현재 탐색하는 정사각형 영역의 시작 행(row)
 * @param {number} c - 현재 탐색하는 정사각형 영역의 시작 열(column)
 * @param {number} size - 현재 탐색하는 정사각형의 한 변의 길이
 * @param {number} num - 현재 탐색 영역의 시작 번호 (건너뛴 칸들의 총합)
 */
function visitZ(r, c, size, num) {
  // ✅ 6단계: 종료 조건 (Base Case)
  // 더 이상 쪼갤 수 없는 가장 작은 단위(1x1)에 도달하면,
  // 현재까지 누적된 값(num)이 바로 목표 지점의 방문 순서이므로 반환합니다.
  if (size === 1) {
    return num;
  }

  // --- 1. Divide (분할) ---
  // 현재 정사각형을 4개의 작은 정사각형으로 분할합니다.
  // nextSize는 그 작은 정사각형의 한 변의 길이가 됩니다.
  const nextSize = size / 2;

  // --- 2. Conquer (정복) ---
  // 💡 3단계: 현재 단계에서의 결정
  // 목표 지점(targetRow, targetCol)이 4개의 사분면 중 어디에 위치하는지 확인합니다.

  // 2-1. 목표가 1사분면(좌상단)에 있을 경우
  if (targetRow < r + nextSize && targetCol < c + nextSize) {
    // 🚀 5단계: 다음 문제 정의 (재귀 호출)
    // 건너뛸 영역이 없으므로 num은 그대로 두고, 1사분면 영역으로 탐색 범위를 좁혀 재귀 호출합니다.
    return visitZ(r, c, nextSize, num);
  }
  // 2-2. 목표가 2사분면(우상단)에 있을 경우
  else if (targetRow < r + nextSize && targetCol >= c + nextSize) {
    // 🧮 4단계: 건너뛸 부분 계산
    // 1사분면 전체를 건너뛰었으므로, 그 넓이(nextSize * nextSize)를 num에 더해줍니다.
    const newNum = num + nextSize * nextSize;
    // 🚀 5단계: 다음 문제 정의 (재귀 호출)
    // 2사분면 영역으로 탐색 범위를 좁히고, 업데이트된 num으로 재귀 호출합니다.
    return visitZ(r, c + nextSize, nextSize, newNum);
  }
  // 2-3. 목표가 3사분면(좌하단)에 있을 경우
  else if (targetRow >= r + nextSize && targetCol < c + nextSize) {
    // 🧮 4단계: 건너뛸 부분 계산
    // 1, 2사분면 전체를 건너뛰었으므로, 그 넓이(nextSize * nextSize * 2)를 num에 더해줍니다.
    const newNum = num + nextSize * nextSize * 2;
    // 🚀 5단계: 다음 문제 정의 (재귀 호출)
    // 3사분면 영역으로 탐색 범위를 좁히고, 업데이트된 num으로 재귀 호출합니다.
    return visitZ(r + nextSize, c, nextSize, newNum);
  }
  // 2-4. 목표가 4사분면(우하단)에 있을 경우
  else {
    // 🧮 4단계: 건너뛸 부분 계산
    // 1, 2, 3사분면 전체를 건너뛰었으므로, 그 넓이(nextSize * nextSize * 3)를 num에 더해줍니다.
    const newNum = num + nextSize * nextSize * 3;
    // 🚀 5단계: 다음 문제 정의 (재귀 호출)
    // 4사분면 영역으로 탐색 범위를 좁히고, 업데이트된 num으로 재귀 호출합니다.
    return visitZ(r + nextSize, c + nextSize, nextSize, newNum);
  }
}

// --- 최초 실행 ---
// r=0, c=0 에서 시작
// size는 2^N x 2^N 배열의 한 변의 길이
// num=0 에서 시작 (아직 건너뛴 칸 없음)
console.log(visitZ(0, 0, 2 ** N, 0));
