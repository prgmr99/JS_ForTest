// 내 풀이
function solution(arr) {
  let stack1 = [];

  for (let i = 0; i < arr.length; i++) {
    if (stack1.length === 0) {
      stack1.push(arr[i]);
    } else if (stack1[stack1.length - 1] !== arr[i]) {
      stack1.push(arr[i]);
    } else {
      continue; // 없으면 효율성 검사에서 시간초과
    }
  }

  return stack1;
}

// 다른 사람 풀이

function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
