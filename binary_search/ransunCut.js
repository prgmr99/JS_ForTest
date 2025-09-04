/*
### 복습하면 좋은 핵심 개념들 ###

1.  이진 탐색 (Binary Search)
    -   이 문제의 핵심 알고리즘입니다. 정렬된 데이터 범위에서 특정 값을 효율적으로 찾아내는 탐색 방법입니다.
    -   매 단계마다 탐색 범위를 절반씩 줄여나가기 때문에 O(log N)의 시간 복잡도를 가집니다.
    -   `start`, `end`, `mid` 변수를 이용해 범위를 조절하고, `while (start <= end)` 조건으로 탐색을 계속하는 전형적인 구조를 복습하기 좋습니다.

2.  매개 변수 탐색 (Parametric Search)
    -   이진 탐색을 응용한 고급 기법입니다. "최적의 값(여기서는 '랜선의 최대 길이')"을 찾는 문제에 사용됩니다.
    -   '랜선의 길이(mid)'를 "매개 변수"로 삼아, 이 길이로 랜선을 잘랐을 때 "N개 이상 만들 수 있는가? (Yes or No)"를 판별합니다.
    -   판별 결과에 따라 이진 탐색으로 최적의 `mid` 값을 찾아나가는 과정입니다. 
    'Yes'가 나오면 길이를 더 늘려보고(`start = mid + 1`), 'No'가 나오면 길이를 줄이는(`end = mid - 1`) 방식으로 최적해를 좁혀갑니다.

3.  JavaScript 배열 메서드 활용
    -   `map(Number)`: 문자열 배열을 숫자 배열로 일괄 변환하는 효율적인 방법입니다.
    -   `sort((a, b) => a - b)`: 숫자를 오름차순으로 정렬하는 표준 비교 함수입니다.
    -   `map()`과 `reduce()`의 연계: `map()`으로 각 랜선을 `mid` 길이로 잘랐을 때 몇 개가 나오는지 계산하고, 
    `reduce()`로 그 총합을 구하는 코드는 함수형 프로그래밍의 좋은 예시입니다. O(K)의 시간 복잡도를 가집니다.

4.  Node.js 표준 입출력 (fs 모듈)
    -   `fs.readFileSync(0, "utf8")`: 코딩 테스트 환경에서 표준 입력(stdin)을 동기적으로 읽는 방법입니다. 
    `0`은 표준 입력을 의미하는 파일 디스크립터입니다.
    -   `.trim()`: 입력값 앞뒤의 불필요한 공백이나 개행 문자를 제거합니다.
    -   `.split('\n')`: 입력 전체를 줄바꿈 기준으로 나누어 배열로 만듭니다.

5.  BigInt와 자료형의 범위
    -   이 문제의 `start`, `end` 값은 JavaScript의 `Number`가 표현할 수 있는 최대 정수(`Number.MAX_SAFE_INTEGER`, 약 9000조) 범위 내에 있지만, 
    더 큰 수를 다루는 문제에서는 `BigInt`를 사용해야 할 수 있습니다. 이진 탐색의 탐색 범위가 매우 클 때 자료형의 한계를 고려하는 습관을 복습할 수 있습니다.
*/

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [K, N] = input[0].split(" ").map(Number);

const numbers = input.slice(1).map(Number);

numbers.sort((a, b) => a - b);

let start = 1;
let end = numbers[numbers.length - 1];

let result = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);

  if (mid === 0) {
    start = 1;
    continue;
  }

  const count = numbers
    .map((num) => Math.floor(num / mid))
    .reduce((a, b) => a + b, 0);

  if (count >= N) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);
