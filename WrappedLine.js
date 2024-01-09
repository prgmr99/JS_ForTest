function solution(lines) {
  const [s1, e1] = lines[0];
  const [s2, e2] = lines[1];
  const [s3, e3] = lines[2];
  let result = 0;

  let [rs1, re1] = [0, 0]; // 첫 번째와 두 번째 겹치는 부분
  let [rs2, re2] = [0, 0]; // 두 번째와 세 번째 겹치는 부분
  let [rs3, re3] = [0, 0]; // 세 번째와 첫 번째 겹치는 부분

  // 첫 번째와 두 번째 비교
  let tempx1 = s1 >= s2 ? s1 : s2;
  let tempy1 = e1 < e2 ? e1 : e2;
  [rs1, re1] = [tempx1, tempy1]; // 만약 rs이 re보다 크다면 겹치는 부분이 없다는 의미

  // 두 번째와 세 번째 비교
  let tempx2 = s2 >= s3 ? s2 : s3;
  let tempy2 = e2 < e3 ? e2 : e3;
  [rs2, re2] = [tempx2, tempy2];

  // 세 번째와 첫 번째 비교
  let tempx3 = s3 >= s1 ? s3 : s1;
  let tempy3 = e3 < e1 ? e3 : e1;
  [rs3, re3] = [tempx3, tempy3];

  console.log([rs1, re1]);
  console.log([rs2, re2]);
  console.log([rs3, re3]);
  console.log("------------------");

  if (rs1 >= re1 && rs2 >= re2 && rs3 >= re3) {
  }

  return result;
}

solution([
  [0, 1],
  [2, 5],
  [3, 9],
]);
solution([
  [-1, 1],
  [1, 3],
  [3, 9],
]);
solution([
  [0, 5],
  [3, 9],
  [1, 10],
]);
solution([
  [0, 2],
  [-3, -1],
  [-2, 1],
]);
