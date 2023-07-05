function solution(numbers, k) {
  let cnt = 1;
  for (let i = 0; i < k - 1; i++) {
    cnt += 2;
    if (cnt > numbers.length - 1) {
      cnt -= numbers.length;
    }
  }
  return cnt;
}

// 참고 풀이
function solution(numbers, k) {
  return numbers[((k - 1) * 2) % numbers.length];
}
// x번째로 던져진 지점이 아니라 던진 사람이기 때문에 k - 1을 해주고, 한 사람씩 건너뛰므로 2를 곱해준 값을 배열의 크기로 나눈 index의 숫자가 답.
// 나머지 연산자로 해당 배열의 길이가 넘었을 경우, 나눠 나머지값으로 다음에 위치할 인덱스 값이 나온다
