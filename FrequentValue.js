// 내 풀이
function solution(array) {
  const obj = new Object();
  let max = -1;
  let resultKeys = [];

  for (let i = 0; i < array.length; i++) {
    obj[array[i]] = (obj[array[i]] || 0) + 1;
  }

  for (const key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      resultKeys = [key];
    } else if (obj[key] === max) {
      resultKeys.push(key);
    }
  }

  return resultKeys.length > 1 ? -1 : +resultKeys;
}

// 최빈값 vs 최빈값의 값 구분하기

// Map 자료구조를 사용했을 경우, 순회하는 방법
for (const element of array) {
  frequencyMap.set(element, (frequencyMap.get(element) || 0) + 1);
}
