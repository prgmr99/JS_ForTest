// 내 풀이
function solution(quiz) {
  const arr = quiz.map((e) => {
    return e.split(" ");
  });
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const num1 = Number(arr[i][0]);
    const num2 = Number(arr[i][2]);
    let total = 0;

    if (arr[i][1] === "-") {
      total = num1 - num2;
    }
    if (arr[i][1] === "+") {
      total = num1 + num2;
    }

    if (total === Number(arr[i][4])) {
      result.push("O");
    }
    if (total !== Number(arr[i][4])) {
      result.push("X");
    }
  }
  return result;
}

// 다른 사람 풀이
function solution(quiz) {
  let answer = [];
  quiz.forEach((val) => {
    const [x, sign, y, , z] = val.split(" "); // 구조분해 사용
    let sum = 0;
    if (sign === "+") {
      sum = Number(x) + Number(y);
    } else {
      sum = Number(x) - Number(y);
    }
    sum === Number(z) ? answer.push("O") : answer.push("X");
  });
  return answer;
}
