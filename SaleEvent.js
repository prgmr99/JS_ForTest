function solution(want, number, discount) {
  let count = 0;
  let startingIndex = 0;
  const obj = {};

  while (startingIndex + 10 <= discount.length) {
    for (let i = 0; i < want.length; i++) {
      obj[want[i]] = number[i];
    }

    for (let i = startingIndex; i < startingIndex + 10; i++) {
      if (!want.includes(discount[i])) {
        continue;
      }

      if (obj[discount[i]] === 0) {
        continue;
      }
      obj[discount[i]]--;
    }

    let sum = 0;
    for (const key in obj) {
      sum += obj[key];
    }

    if (sum === 0) {
      count++;
    }

    startingIndex++;
  }

  return count;
}
