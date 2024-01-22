// 내 풀이
function solution(d, budget) {
  const temp = d.sort((a, b) => a - b);
  let count = 0;
  let temp2 = budget;

  for (let i = 0; i < d.length; i++) {
    temp2 -= temp[i];
    if (temp2 >= 0) {
      count++;
    }
  }
  return count;
}

// 다른 사람 풀이
// reduce 활용
function solution(d, budget) {
  d.sort((a, b) => a - b);

  while (d.reduce((a, b) => a + b, 0) > budget) d.pop();

  return d.length;
}
