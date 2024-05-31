function solution(n) {
  let result = [];
  for (let k = 2; (k * (k - 1)) / 2 < n; k++) {
    if ((n - (k * (k - 1)) / 2) % k === 0) {
      let start = (n - (k * (k - 1)) / 2) / k;
      let sequence = [];
      for (let i = 0; i < k; i++) {
        sequence.push(start + i);
      }
      result.push(sequence);
    }
  }
  return result.length + 1;
}

// 다른 사람 풀이
function solution(n) {
  const answer = [];
  let numbers = [];
  let i = 1,
    j = 1;

  while (i <= n) {
    if (i > n) break;
    numbers.push(i);
    let total = 0;
    for (const num of numbers) total += num;
    if (total === n) {
      answer.push(numbers.shift());
      i = j++;
    } else if (total > n) {
      numbers = [];
      i = j++;
    }
    i++;
  }

  return answer.length;
}
