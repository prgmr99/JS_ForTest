function solution(numlist, n) {
  const pivot = n;
  const sortedArr = numlist.sort((a, b) => {
    const diffA = Math.abs(a - pivot);
    const diffB = Math.abs(b - pivot);

    // 두 수의 차이가 같으면 큰 수를 먼저 배치
    if (diffA === diffB) {
      return b - a;
    }

    // 차이가 작은 순으로 정렬
    return diffA - diffB;
  });
  return sortedArr;
}
