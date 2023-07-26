function solution(brown, yellow) {
  const smaller = brown > yellow ? yellow : brown;
  const area = brown + yellow;
  const result = [];
  let h = 3;
  let w;

  while (true) {
    w = Math.floor(area / h);
    if (w < h) {
      break;
    }
    if (area % w === 0) {
      if ((w - 2) * (h - 2) === yellow) {
        result.push(...[w, h]);
      }
    }
    h++;
  }
  return result;
}
