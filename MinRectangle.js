// 내 풀이
function solution(sizes) {
  const x = [];
  const y = [];

  sizes.forEach((v) => {
    v.sort((a, b) => b - a);
  });

  sizes.forEach((v) => {
    x.push(v[0]);
    y.push(v[1]);
  });

  x.sort((a, b) => b - a);
  y.sort((a, b) => b - a);

  return x[0] * y[0];
}

// 다른 사람 풀이 1
// [] 구조 활용
function solution(sizes) {
  const rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));

  let maxSize = [0, 0];
  rotated.forEach(([w, h]) => {
    if (w > maxSize[0]) maxSize[0] = w;
    if (h > maxSize[1]) maxSize[1] = h;
  });
  return maxSize[0] * maxSize[1];
}

// 다른 사람 풀이 2
// reduce 활용
function solution(sizes) {
  const [hor, ver] = sizes.reduce(
    ([h, v], [a, b]) => [
      Math.max(h, Math.max(a, b)),
      Math.max(v, Math.min(a, b)),
    ],
    [0, 0]
  );
  return hor * ver;
}
