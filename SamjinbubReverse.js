function solution(n) {
  let temp = n;
  let sum = 0;
  const arr = [];

  while (temp !== 0) {
    arr.push(temp % 3);
    temp = Math.floor(temp / 3);
  }

  const result = arr.join("");
  const len = result.length;
  for (let i = len - 1; i >= 0; i--) {
    sum += result[len - 1 - i] * Math.pow(3, i);
  }
  return sum;
}

// 다른 사람 풀이
// to.String()의 매개변수
const solution = (n) => {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
};
