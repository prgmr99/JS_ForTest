function solution(k, m, score) {
  const boxes = [];
  let sum = 0;

  score.sort((a, b) => b - a);

  for (let i = 0; i < score.length; i += m) {
    let box = score.slice(i, i + m);
    boxes.push(box);
  }

  const filteredBoxes = boxes.filter((v) => v.length === m);

  filteredBoxes.forEach((v) => {
    sum += v[v.length - 1] * m;
  });

  return sum;
}

// 다른 사람 풀이
function solution(k, m, score) {
  let answer = 0;
  const sortedScore = score
    .slice()
    .sort((a, b) => a - b)
    .slice(score.length % m);
  for (let i = 0; i < sortedScore.length; i += m) {
    answer += sortedScore[i] * m;
  }
  return answer;
}
