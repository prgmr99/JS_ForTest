function solution(a, b) {
  // a를 b로 나눈 수를 소수점 아래 10의 자리만큼 표기한 후 Number 타입으로 변환한다.
  // 이때 변환한 값과 a를 b로 나눈 수가 같다면 유한소수이므로 1,
  // 아니라면 무한소수이므로 2를 리턴한다.
  return Number((a / b).toFixed(10)) == a / b ? 1 : 2;
}

// 최대 공약수 구하기
function cal_gcd(x, y) {
  return x % y === 0 ? y : cal_gcd(y, x % y);
}

// 소인수분해 하기
function primeFactors(n) {
  let result = [];
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor === 0) {
      result.push(divisor);
      n = n / divisor;
    } else divisor++;
  }

  return [...new Set(result)];
}

function solution(a, b) {
  const gcd = cal_gcd(a, b);
  a = a / gcd;
  b = b / gcd;

  const primes = primeFactors(b);
  return primes.find((n) => n !== 2 && n !== 5) ? 2 : 1;
}
