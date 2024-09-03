function solution(clothes) {
  const obj = {};
  let sum = 1;

  for (let i = 0; i < clothes.length; i++) {
    obj[clothes[i][1]] = [];
  }

  for (let i = 0; i < clothes.length; i++) {
    obj[clothes[i][1]].push(clothes[i][0]);
  }

  for (const key in obj) {
    sum *= obj[key].length + 1;
  }
  return sum - 1;
}

function solution(clothes) {
  const obj = {};

  // 한 번의 루프에서 객체에 의상 종류별로 개수를 기록
  for (let i = 0; i < clothes.length; i++) {
    const [item, type] = clothes[i];
    obj[type] = (obj[type] || 0) + 1;
  }

  // 각 의상 종류별 (개수 + 1) 을 곱하고, 마지막에 1을 빼서 아무것도 입지 않은 경우 제외
  return Object.values(obj).reduce((acc, curr) => acc * (curr + 1), 1) - 1;
}
