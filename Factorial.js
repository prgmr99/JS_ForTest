/**
 * [내 풀이]
 * 떠오르는 메서드도 없고
 * 효율적이지는 않지만 빠른 속도를 가진 풀이.
 */
/*function solution(n) {
  if (n > 0 && n < 2) return 1;
  else if (n >= 2 && n < 6) return 2;
  else if (n >= 6 && n < 24) return 3;
  else if (n >= 24 && n < 120) return 4;
  else if (n >= 120 && n < 720) return 5;
  else if (n >= 720 && n < 5040) return 6;
  else if (n >= 5040 && n < 40320) return 7;
  else if (n >= 40320 && n < 362880) return 8;
  else if (n >= 362880 && n < 3628800) return 9;
  else return 10;
}*/

function solution(n) {
  let i = 1;
  let f = 1;
  while (f * i < n) f *= ++i;
  return i;
}
