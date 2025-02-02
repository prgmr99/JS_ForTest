function solution(x, y, n) {
  const calc = (a, num) => {
    switch (num) {
      case 0:
        return a - n;
      case 1:
        if (a % 2 === 0) {
          return a / 2;
        } else {
          return 0;
        }
      case 2:
        if (a % 3 === 0) {
          return a / 3;
        } else {
          return 0;
        }
    }
  };

  const bfs = () => {
    let queue = [[y, 0]];
    let visit = {};
    visit[y] = 1;

    while (queue.length) {
      let [cur, count] = queue.shift();

      if (cur === x) return count;

      for (let i = 0; i < 3; ++i) {
        let next = calc(cur, i);
        if (next >= x && !visit[next]) {
          visit[next] = 1;
          queue.push([next, count + 1]);
        }
      }
    }

    return -1;
  };

  return bfs();
}
