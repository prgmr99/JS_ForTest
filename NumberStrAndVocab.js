// 2021 카카오 채용연계형 인턴쉽
// 내 풀이
function solution(s) {
  const obj = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
    zero: "0",
  };

  for (key in obj) {
    if (s.includes(key)) {
      s = s.replaceAll(key, obj[key]);
    } else {
      continue;
    }
  }

  return Number(s);
}

// 다른 사람 풀이
function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}
