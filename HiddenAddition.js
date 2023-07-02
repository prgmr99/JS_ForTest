function solution(my_string) {
  let result = 0;
  for (let i = 0; i < my_string.length; i++) {
    let total = 0;
    while (!Number.isNaN(Number(my_string[i]))) {
      total += my_string[i];
      i++;
    }
    result += Number(total);
  }
  return result;
}

// Number.isNan() 함수
// 전달된 값이 숫자인지 아닌지를 확인
