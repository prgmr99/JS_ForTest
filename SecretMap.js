function solution(n, arr1, arr2) {
  const result = [];
  const biarr1 = arr1.map((e) => {
    return e.toString(2);
  });

  const biarr2 = arr2.map((e) => {
    return e.toString(2);
  });

  for (let i = 0; i < n; i++) {
    if (biarr1[i].length !== n) {
      let zeros = "0".repeat(n - biarr1[i].length);
      biarr1[i] = zeros + biarr1[i];
    }
    if (biarr2[i].length !== n) {
      let zeros = "0".repeat(n - biarr2[i].length);
      biarr2[i] = zeros + biarr2[i];
    }
  }

  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      if (biarr1[i][j] === "0" && biarr2[i][j] === "0") {
        str += " ";
      } else {
        str += "#";
      }
    }
    result.push(str);
  }

  return result;
}

// 다른 사람 풀이
// padStart 활용
1;
2;
var solution = (n, a, b) =>
  a.map((a, i) =>
    (a | b[i]).toString(2).padStart(n, 0).replace(/0/g, " ").replace(/1/g, "#")
  );
