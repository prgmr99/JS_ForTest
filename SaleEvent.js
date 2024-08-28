function solution(want, number, discount) {
  let count = 0;
  let startingIndex = 0;
  const obj = {};

  while (startingIndex + 10 <= discount.length) {
    for (let i = 0; i < want.length; i++) {
      obj[want[i]] = number[i];
    }

    for (let i = startingIndex; i < startingIndex + 10; i++) {
      if (!want.includes(discount[i])) {
        continue;
      }

      if (obj[discount[i]] === 0) {
        continue;
      }
      obj[discount[i]]--;
    }

    let sum = 0;
    for (const key in obj) {
      sum += obj[key];
    }

    if (sum === 0) {
      count++;
    }

    startingIndex++;
  }

  return count;
}

// 개선한 코드
function solution(want, number, discount) {
  let count = 0;
  const obj = {};

  // 초기 obj 설정
  for (let i = 0; i < want.length; i++) {
    obj[want[i]] = number[i];
  }

  // 초기 윈도우 설정 (첫 10일)
  for (let i = 0; i < 10; i++) {
    if (obj[discount[i]] !== undefined) {
      obj[discount[i]]--;
    }
  }

  // 윈도우의 모든 항목이 충족되었는지 확인
  const isAllZero = () => Object.values(obj).every((val) => val === 0);

  if (isAllZero()) {
    count++;
  }

  // 슬라이딩 윈도우 적용
  for (let i = 10; i < discount.length; i++) {
    // 이전 윈도우의 첫 번째 항목 복원
    const firstItem = discount[i - 10];
    if (obj[firstItem] !== undefined) {
      obj[firstItem]++;
    }

    // 새로운 윈도우의 마지막 항목 처리
    const newItem = discount[i];
    if (obj[newItem] !== undefined) {
      obj[newItem]--;
    }

    // 윈도우가 조건을 만족하는지 확인
    if (isAllZero()) {
      count++;
    }
  }

  return count;
}
