/**
 * 2×n 타일링 문제 최적화 정리
 *
 * 최적화 요약:
 * 1. 항상 양수 보장: (prevPrevCount + prevCount + MOD) % MOD
 *    - JavaScript % 연산은 음수 피연산자일 때 음수 결과를 반환할 수 있음
 *    - MOD를 더해 음수 가능성을 제거하고 [0, MOD) 구간 결과 확보
 * 2. 분기 제거: 조건문(if) 대신 단일 모듈로 연산
 *    - 루프 내 분기를 없애 JIT(Just-In-Time) 컴파일러 최적화 유도
 *    - 예측 실패로 인한 성능 저하 방지
 * 3. 배열 제거: O(1) 메모리 사용
 *    - result 배열 없이 두 변수(prevPrevCount, prevCount)만 사용
 *    - 메모리 할당/GC 오버헤드 감소
 *
 * 코드 설명:
 * - MOD: 1e9+7로 나머지 계산
 * - 초기 조건: n=1 → 1, n=2 → 2
 * - 루프: 3부터 n까지 한 번만 순회하며 이전 두 값으로 현재 값 계산
 */

function solution(n) {
  let a = 1;
  let b = 2;
  for (let i = 3; i <= n; i++) {
    let next = (a + b + 1000000007) % 1000000007;
    a = b;
    b = next;
  }
  return b;
}
