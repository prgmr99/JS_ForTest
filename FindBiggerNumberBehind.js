function solution(numbers) {
  const result = new Array(numbers.length).fill(-1);
  const stack = [];

  for (let i = 0; i < numbers.length; i++) {
    while (stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
      const index = stack.pop();
      result[index] = numbers[i];
    }
    stack.push(i);
  }

  return result;
}

console.log(solution([2, 3, 3, 5])); // [3, 5, 5, -1]
