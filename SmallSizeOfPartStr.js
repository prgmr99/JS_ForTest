// 내 풀이
function solution(t, p) {
  let count = 0;
  const len = p.length;
  const number = Number(p);
  const arr = [];

  for (let i = 0; i < t.length - len + 1; i++) {
    const result = t.substr(i, len);
    if (result <= number) {
      arr.push(result);
    }
  }

  return arr.length;
}
