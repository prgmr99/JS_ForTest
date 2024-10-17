function solution(numbers) {
  const numArr = numbers.split("");
  const arr = new Set();

  // 소수인지 확인하는 함수
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  function makeArr(number, used) {
    if (number.length > 0) arr.add(Number(number));

    for (let i = 0; i < numArr.length; i++) {
      if (!used[i]) {
        const newUsed = [...used];
        newUsed[i] = true;
        makeArr(number + numArr[i], newUsed);
      }
    }
  }

  makeArr("", Array(numArr.length).fill(false));

  // 숫자로 변환한 후 소수만 필터링
  const primeArr = Array.from(arr).filter(isPrime);

  return primeArr.length;
}

// 2차 풀이
function solution(numbers) {
  const numArr = numbers.split("");
  const set = new Set();

  // 소수인지 확인하는 로직
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < Math.sqrt(num); i++) {
      if (num % 2 === 0) return false;
    }
    return true;
  }

  // 돌아가면서 숫자 경우를 생성하는 로직
  function makeNum(number, used) {
    if (number.length > 0) set.add(Number(number));

    for (let i = 0; i < numArr.length; i++) {
      if (!used[i]) {
        const newUsed = [...used];
        newUsed[i] = true;
        makeNum(number + numArr[i], newUsed);
      }
    }
  }

  makeNum("", Array(numArr.length).fill(false));

  const primeArr = Array.from(set).filter(isPrime);

  return primeArr.length;
}
