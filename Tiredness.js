// 완전탐색 - 재궈

function solution(k, dungeons) {
  let maxCount = 0;

  function explore(currentK, visited, count) {
    maxCount = Math.max(maxCount, count);

    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && currentK >= dungeons[i][0]) {
        visited[i] = true;
        explore(currentK - dungeons[i][1], visited, count + 1);
        visited[i] = false;
      }
    }
  }

  explore(k, Array(dungeons.length).fill(false), 0);
  return maxCount;
}
