// 내 풀이
function solution(s) {
  const sCut = s.slice(1, s.length - 1);
  const sArr = sCut.split("},");

  const result = [];

  const finingsArr = sArr.map((e) => {
    if (e.includes("{") || e.includes("}")) {
      const f = e.replace("{", "");
      const s = f.replace("}", "");
      return s;
    }
  });

  const sortedArr = finingsArr.sort((a, b) => {
    return a.split(",").length - b.split(",").length;
  });

  const convertArr = sortedArr.map((item) => {
    return item.split(",").map(Number);
  });

  for (let i = 0; i < convertArr.length; i++) {
    for (let j = 0; j < convertArr[i].length; j++) {
      if (!result.includes(convertArr[i][j])) {
        result.push(convertArr[i][j]);
      } else continue;
    }
  }
  return result;
}

// 시간 복잡도 약소 개선
function solution(s) {
  // 문자열에서 불필요한 '{'와 '}' 제거 및 배열로 변환
  const finingsArr = s
    .slice(2, -2)
    .split("},{")
    .map((e) => e.split(",").map(Number));

  // 배열을 길이 기준으로 정렬
  const sortedArr = finingsArr.sort((a, b) => a.length - b.length);

  // 중복 없이 순서대로 결과 배열에 추가
  const result = [];
  sortedArr.forEach((arr) => {
    arr.forEach((num) => {
      if (!result.includes(num)) {
        result.push(num);
      }
    });
  });

  return result;
}
