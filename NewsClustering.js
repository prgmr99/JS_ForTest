function solution(str1, str2) {
  // 다중집합 생성 함수
  const makeMultiSet = (str) => {
    const result = [];
    for (let i = 0; i < str.length - 1; i++) {
      const word = str[i] + str[i + 1];
      // 알파벳이 아닌 문자 포함 여부 확인
      if (/[^a-zA-Z]/.test(word)) continue;
      result.push(word.toLowerCase()); // 대소문자 구분 제거
    }
    return result;
  };

  const multiSet1 = makeMultiSet(str1);
  const multiSet2 = makeMultiSet(str2);

  // 교집합 계산
  const intersection = [];
  const union = [...multiSet1];

  const copyMultiSet2 = [...multiSet2]; // multiSet2를 수정하면서 작업
  multiSet1.forEach((word) => {
    const index = copyMultiSet2.indexOf(word);
    if (index !== -1) {
      intersection.push(word);
      copyMultiSet2.splice(index, 1); // 이미 교집합에 포함된 원소는 제거
    }
  });

  // 합집합 계산 (남은 multiSet2 추가)
  union.push(...copyMultiSet2);

  // 자카드 유사도 계산
  const similarity =
    intersection.length === 0 && union.length === 0
      ? 65536
      : Math.floor((intersection.length / union.length) * 65536);

  return similarity;
}
