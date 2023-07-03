function solution(bin1, bin2) {
  return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}

// parseInt에 두 번째 매개변수로 2를 주어 2진수를 정수로 변환
// toString(2)를 작성하여 정수를 2진수 & 문자열로 변환
