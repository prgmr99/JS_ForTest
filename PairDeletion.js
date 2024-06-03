// 1차 풀이 - 시간초과 발생
function solution(s) {
  let str = s;

  while (true) {
    let index = null;

    // 연속된 중복 문자 찾기
    for (let i = 0; i < str.length - 1; i++) {
      if (str[i] === str[i + 1]) {
        index = i;
        break;
      }
    }

    // 연속된 중복 문자가 없으면 반복 종료
    if (index === null) {
      return 0;
    }

    // 연속된 중복 문자를 제거
    str = str.slice(0, index) + str.slice(index + 2);

    // 문자열이 비어있는지 확인
    if (str === "") {
      return 1;
    }
  }
}

// 2차 풀이 - 정답
function solution(s) {
  const stack = [];

  for (let char of s) {
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0 ? 1 : 0;
}
