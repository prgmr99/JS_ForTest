function fact(n) {
  let factors = new Set();
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor === 0) {
      factors.add(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }

  return Array.from(factors);
}

// 중복된 값을 없애기 위해 Set을 이용하였다.
