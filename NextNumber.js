function solution(common) {
  let answer = 0;

  const diff1 = common[1] - common[0];
  const diff2 = common[2] - common[1];

  if (diff1 === diff2) {
    answer = common[common.length - 1] + diff1;
  } else {
    const diff3 = common[1] / common[0];
    answer = common[common.length - 1] * diff3;
  }

  return answer;
}
