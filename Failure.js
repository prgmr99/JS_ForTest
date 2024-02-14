// 내 풀이
function solution(N, stages) {
  let result = [];
  let answer = [];

  // 각 인덱스의 분자 = (인덱스 + 1)의 개수
  // 각 인덱스의 분모 = (인덱스 + 1)이상인 수의 개수

  let top = 0;
  let bottom = stages.length;

  for (let i = 0; i < N; i++) {
    top = stages.filter((e) => e === i + 1).length;
    result.push([top / bottom, i + 1]);
    bottom -= top;
  }

  result.sort((a, b) => b[0] - a[0]);

  result.forEach((e) => {
    answer.push(e[1]);
  });

  return answer;
}

// 다른 사람 풀이
function solution(N, stages) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    let reach = stages.filter((x) => x >= i).length;
    let curr = stages.filter((x) => x === i).length;
    result.push([i, curr / reach]);
  }
  result.sort((a, b) => b[1] - a[1]);
  return result.map((x) => x[0]);
}
