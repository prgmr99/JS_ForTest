function gcd(a, b) {
  return a % b === 0 ? b : gcd(b, a % b);
}

function solution(n, m) {
  let answer1 = gcd(n, m);

  return [answer1, (n * m) / answer1];
}

// 최대공약수, 최소공배수
