function solution(numbers, target) {
  let cnt = 0;
  let i = 0;
  let total = 0;

  function dfs(i, sum) {
    if (i === numbers.length) {
      if (sum === target) {
        cnt++;
      }
      return;
    }
    dfs(i + 1, sum + numbers[i]);
    dfs(i + 1, sum - numbers[i]);
  }

  dfs(0, 0);

  return cnt;
}
