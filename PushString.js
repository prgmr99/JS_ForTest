// 내 풀이
function solution(A, B) {
  let str = A;
  let cnt = 0;
  const copyStr = [...str];

  while (str !== B) {
    if (cnt === A.length) {
      cnt = -1;
      break;
    }
    for (let i = 0; i < A.length; i++) {
      if (i === 0) {
        copyStr[i] = str[str.length - 1];
      } else {
        copyStr[i] = str[i - 1];
      }
    }
    const temp = copyStr.join("");
    str = temp;
    cnt++;
  }

  return cnt;
}

// 다른 사람 풀이
// unshift: 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환
// pop: 배열에서 마지막 요소를 제거하고 그 요소를 반환
function solution(A, B) {
  let arr = [...A];
  for (let i = 0; i < arr.length; i++) {
    if (A === B) return i;
    else {
      arr.unshift(arr.pop());
      if (arr.join("") === B) return i + 1;
    }
  }
  return -1;
}
