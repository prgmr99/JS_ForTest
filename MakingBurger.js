function solution(ingredient) {
  const stack = []; // 재료를 쌓을 스택
  let count = 0; // 포장한 햄버거 개수

  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]); // 현재 재료를 스택에 추가

    // 스택이 햄버거 순서대로 쌓였는지 확인
    // 아래의 조건을 작성하는 것이 비효율적이라고 생각했었는데,
    // 실제로 적힌 코드를 읽어보니 그렇지는 않은 것 같다.
    while (
      stack.length >= 4 &&
      stack[stack.length - 1] === 1 &&
      stack[stack.length - 2] === 3 &&
      stack[stack.length - 3] === 2 &&
      stack[stack.length - 4] === 1
    ) {
      // 햄버거 포장 가능하면 스택에서 재료 제거
      stack.pop();
      stack.pop();
      stack.pop();
      stack.pop();
      count++; // 햄버거 개수 증가
    }
  }

  return count;
}
