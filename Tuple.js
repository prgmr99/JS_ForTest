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
