function solution(lottos, win_nums) {
  const arr = [];
  const rank = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  };

  for (let i = 0; i < 6; i++) {
    arr.push(lottos.includes(win_nums[i]));
  }

  const minCorrect = arr.filter((v) => v === true).length;

  const zeroAmount = lottos.filter((v) => v === 0).length;

  const maxCorrect = minCorrect + zeroAmount;

  return [rank[maxCorrect], rank[minCorrect]];
}

// 다른 사람 풀이
function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCount = lottos.filter((v) => win_nums.includes(v)).length;
  let zeroCount = lottos.filter((v) => !v).length;

  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}
