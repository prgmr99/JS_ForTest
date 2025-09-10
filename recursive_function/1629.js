/*
### 복습하면 좋은 핵심 개념들 ###

1.  **분할 정복 (Divide and Conquer)**
    -   이 문제의 핵심 알고리즘 패러다임입니다. A^B를 구하기 위해 B를 계속 절반으로 나누어 문제를 더 작은 단위로 쪼개고(Divide), 
        작은 문제의 답을 조합하여 원래 문제의 답을 구합니다(Conquer).
    -   재귀 함수 `power`는 이 패러다임을 전형적으로 보여줍니다.

2.  **거듭제곱 by Squaring (Exponentiation by Squaring)**
    -   분할 정복을 이용해 거듭제곱을 효율적으로 계산하는 알고리즘입니다.
    -   **O(B)의 시간 복잡도**를 **O(log B)로** 획기적으로 줄여줍니다.
    -   핵심 원리:
        -   지수가 짝수일 때: A^B = (A^(B/2))^2
        -   지수가 홀수일 때: A^B = A * A^(B-1) = A * (A^((B-1)/2))^2

3.  **모듈러 산술 (Modular Arithmetic)**
    -   나머지 연산의 분배 법칙을 이해하는 것이 중요합니다.
    -   `(X * Y) % C`는 `((X % C) * (Y % C)) % C`와 같습니다.
    -   이 성질 덕분에 거듭제곱을 하는 중간 과정마다 `% C` 연산을 적용하여, 
        수가 무한정 커지는 것을 막고 자료형의 범위를 벗어나지 않게 할 수 있습니다. 
        코드의 모든 곱셈 뒤에 `% C`가 붙는 이유입니다.

4.  **BigInt 자료형**
    -   JavaScript의 기본 `Number` 타입은 `Number.MAX_SAFE_INTEGER`(약 9000조)보다 큰 정수를 정확하게 표현할 수 없습니다.
    -   이 문제처럼 수의 범위가 매우 클 수 있는 경우, 임의의 크기의 정수를 다룰 수 있는 `BigInt`를 사용해야 합니다.
    -   `BigInt` 연산은 숫자 뒤에 `n`을 붙여 표시하며, `BigInt`끼리만 연산이 가능합니다. (예: `1n`, `exponent / 2n`)
*/

const fs = require("fs");
const [A, B, C] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(BigInt);

function power(base, exponent) {
  if (exponent === 1n) {
    return base % C;
  } else if (exponent % 2n === 0n) {
    let byTwo = power(base, exponent / 2n) % C;
    return (byTwo * byTwo) % C;
  } else {
    let byTwoPlusOne = power(base, (exponent - 1n) / 2n) % C;
    return (((byTwoPlusOne * byTwoPlusOne) % C) * base) % C;
  }
}

console.log(power(A, B).toString());
