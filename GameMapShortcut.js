function solution(maps) {
  const td = [1, 0, -1, 0];
  const lr = [0, 1, 0, -1];
  const N = maps.length;
  const M = maps[0].length;
  let cnt = 1;
  let visited = [...maps];
  let queue = [];

  visited[0][0] = 0;
  queue.push([0, 0]);

  while (queue.length > 0) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let [x, y] = queue.shift();

      for (let j = 0; j < 4; j++) {
        const nx = x + td[j];
        const ny = y + lr[j];

        if (nx >= 0 && nx < N && ny >= 0 && ny < M && visited[nx][ny] === 1) {
          if (nx == N - 1 && ny == M - 1) {
            return ++cnt;
          }
          queue.push([nx, ny]);
          visited[nx][ny] = 0;
        }
      }
    }
    cnt++;
  }
  return -1;
}
