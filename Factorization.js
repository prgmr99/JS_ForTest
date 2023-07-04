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
