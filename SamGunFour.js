function solution(number) {
  const len = number.length;
  let sum = 0;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        if (number[i] + number[j] + number[k] === 0) sum += 1;
      }
    }
  }
  return sum;
}
