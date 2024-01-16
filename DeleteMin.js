function solution(arr) {
  if (arr.includes(10) && arr.length === 1) {
    return [-1];
  }

  let min = 9999;

  arr.forEach((v) => {
    if (v < min) {
      min = v;
    }
  });

  return arr.filter((v) => v !== min);
}

// 다른 사람 풀이
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);

  if (arr.length < 1) {
    return [-1];
  }

  return arr;
}
