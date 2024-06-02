// 런타임 에러 나는 코드
function fibo(n, memo = {}) {
  const MOD = BigInt(1234567);
  if (n === 0) {
    return BigInt(0);
  }
  if (n === 1) {
    return BigInt(1);
  }
  if (n in memo) {
    return memo[n];
  }
  memo[n] = (fibo(n - 1, memo) + fibo(n - 2, memo)) % MOD;
  return memo[n];
}

function solution(n) {
  return Number(fibo(n));
}

// 런타임 에러 안 나는 코드
function solution(n) {
  // n 번째 피보나치 수
  // 피보나치 수는 0부터 시작됨
  // 0부터 시작하는 피보나치수의 n번째 수를 구해야함
  // 해당 수를 1234567로 나눈 나머지 리턴
  // 자바스크립트가 정수계산을 보장하는 범위는 console.log(Number.MAX_SAFE_INTEGER)
  console.log(Number.MAX_SAFE_INTEGER);
  let answer = fibonumber(n) % 1234567;
  return answer;
}

function fibonumber(v) {
  let bottom_up = [];
  bottom_up[0] = 0;
  bottom_up[1] = 1;
  bottom_up[2] = 1;
  for (let i = 3; i <= v; i++) {
    bottom_up[i] = (bottom_up[i - 1] % 1234567) + (bottom_up[i - 2] % 1234567);
  }
  return bottom_up[v];
}

// 개선된 코드 - 메모이제이션을 사용한 재귀함수보다 빠름.
function solution(n) {
  const MOD = 1234567; // 모듈로 연산에 사용할 값
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0; // 첫 번째 피보나치 수
  let b = 1; // 두 번째 피보나치 수
  let c = 0; // 현재 계산 중인 피보나치 수

  for (let i = 2; i <= n; i++) {
    c = (a + b) % MOD; // 현재 피보나치 수를 계산하고 모듈로 연산 적용
    a = b; // 다음 계산을 위해 a를 업데이트
    b = c; // 다음 계산을 위해 b를 업데이트
  }

  return Number(c); // 최종 결과를 Number 타입으로 변환하여 반환
}
