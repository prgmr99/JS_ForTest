function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(nums) {
  const combinations = [];

  // 모든 가능한 3개의 숫자 조합 찾기
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        combinations.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  // 소수인 경우의 개수 세기
  const primeCount = combinations.filter(isPrime).length;

  return primeCount;
}
