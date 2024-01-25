// 내 풀이
// lastIndexOf 활용
function solution(s) {
  const result = [-1];

  for (let i = 1; i < s.length; i++) {
    if (!s.slice(0, i).includes(s[i])) {
      result.push(-1);
    } else {
      const gap = i - s.slice(0, i).lastIndexOf(s[i]);
      result.push(gap);
    }
  }

  return result;
}
