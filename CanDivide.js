function solution(arr, divisor) {
  const result = [];

  arr.forEach((e) => {
    if (e % divisor === 0) {
      result.push(e);
    }
  });

  result.sort((a, b) => a - b);

  if (result.length === 0) {
    return [-1];
  }

  return result;
}

// 다른 사람 풀이: filter 활용
function solution(arr, divisor) {
  var answer = arr.filter((v) => v % divisor == 0);
  return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
}
