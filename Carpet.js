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

// 나의 다른 풀이
function solution(brown, yellow) {
  const area = brown + yellow;
  let w = 0;
  let h = 3;
  const result = [];

  while (true) {
    w = Math.floor(area / h);

    if (w < h) break;

    const yellowArea = (w - 2) * (h - 2);

    if (yellowArea === yellow) {
      result.push(...[w, h]);
      break;
    }

    h++;
  }

  return result;
}
