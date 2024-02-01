function solution(k, score) {
  const result = [];
  let rank = [];

  for (let i = 0; i < score.length; i++) {
    rank.push(score[i]);
    rank.sort((a, b) => b - a);

    if (i > k - 1) {
      rank = rank.slice(0, k);
    }
    result.push(rank[rank.length - 1]);
  }
  return result;
}
