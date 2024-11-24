function solution(prices) {
  const answer = Array(prices.length).fill(0); // 결과를 저장할 배열
  const stack = []; // 가격과 인덱스를 저장할 스택

  for (let i = 0; i < prices.length; i++) {
    // 현재 가격보다 스택의 가격이 높으면 가격이 떨어진 것이므로 스택에서 꺼냄
    while (stack.length > 0 && stack[stack.length - 1][0] > prices[i]) {
      const [_, index] = stack.pop();
      answer[index] = i - index; // 가격이 유지된 기간 계산
    }
    // 현재 가격과 인덱스를 스택에 저장
    stack.push([prices[i], i]);
  }

  // 스택에 남아 있는 요소는 끝까지 가격이 떨어지지 않은 경우
  while (stack.length > 0) {
    const [_, index] = stack.pop();
    answer[index] = prices.length - 1 - index;
  }

  return answer;
}
