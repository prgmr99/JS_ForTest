function solution(num) {
  let number = num;
  let count = 0;

  while (number !== 1) {
    if (count === 500) {
      return -1;
    }

    if (number % 2 === 0) {
      number /= 2;
    } else if (number % 2 !== 0) {
      number *= 3;
      number += 1;
    }
    count++;
  }

  return count;
}

// 다른 사람 풀이
function collatz(num) {
  var answer = 0;
  while (num != 1 && answer != 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return num == 1 ? answer : -1;
}
