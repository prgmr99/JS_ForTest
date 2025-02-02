function solution(x, y, n) {
  if (x === y) return 0;

  const queue = [[x, 0]];
  const visited = new Set([x]);

  while (queue.length > 0) {
    const [current, count] = queue.shift();

    for (const next of [current + n, current * 2, current * 3]) {
      if (next === y) return count + 1;
      if (next < y && !visited.has(next)) {
        visited.add(next);
        queue.push([next, count + 1]);
      }
    }
  }

  return -1;
}