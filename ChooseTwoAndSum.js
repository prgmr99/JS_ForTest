function solution(numbers) {
  const result = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      // console.log(numbers[i] + numbers[j]);
      result.push(numbers[i] + numbers[j]);
    }
  }

  const set = new Set(result);
  const arr = Array.from(set);
  return arr.sort((a, b) => a - b); // 이거 정확히 안 써주면 12가 2보다 앞에 옴
}

// 다른 사람 풀이
function solution(numbers) {
  const temp = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }

  const answer = [...new Set(temp)]; // 이거다..

  return answer.sort((a, b) => a - b);
}
