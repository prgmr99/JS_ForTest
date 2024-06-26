const today = "2020.01.01";
const year = today.slice(0, 4);
const month = today.slice(5, 7);
const day = today.slice(8, 10);

const terms = ["Z 3", "D 5"];
const privacies = [
  "2019.01.01 D",
  "2019.11.15 Z",
  "2019.08.02 D",
  "2019.07.01 D",
  "2018.12.28 Z",
];

// result:[1,3]
// 오늘 날짜와 privacies에 약관 유효기간을 더한 날짜와 비교하여
// 통과된 녀석들의 index만 +1하여 배열에 담는다.

// 2021.05.02 -> 2021.11.01(파기)
// 2021.07.01 -> 2022.06.28(보관 가능)
// 2022.02.19 -> 2022.05.18(파기)
// 2022.02.20 -> 2022.05.19(보관 가능)

// 5 + 10 => 15 / 12 = 1, 15 % 12 = 3
// 12 + 39 => 51 / 12 = 4, 51 % 12 = 3

// 첫 번째 값은 년도에 더하면 됨.
// 두 번째 값은 월에 더하면 됨. 더했을 때 12를 넘는 경우, 12 + 3 => 15 % 12 = 3, 15 / 12 = 1
// 세 번째 값은 기존의 값에서 -1한 값. 1인 경우, 28로 할당한다.

const objForTerms = {};
const objForPrivacies = {};
const result = [];
const temp = terms.map((e) => e.split(" "));
temp;

temp.map((e) => (objForTerms[e[0]] = Number(e[1])));
objForTerms;
const temp2 = privacies.map((e) => e.split(" "));
temp2;
temp2.map((e) => (objForPrivacies[e[0]] = e[1]));
//objForPrivacies

for (let i = 0; i < temp2.length; i++) {
  const date = temp2[i][0];
  const num = objForTerms[temp2[i][1]];
  const year = +date.slice(0, 4);
  const month = +date.slice(5, 7);
  const day = +date.slice(8, 10);
  const resultDate = calculate(num, year, month, day);
  console.log(resultDate);
  if (today > resultDate) {
    result.push(i + 1);
  }
}

function calculate(num, year, month, day) {
  const newDay = day !== 1 ? day - 1 : 28;
  const newMonth = month + num - 1 > 12 ? (month + num - 1) % 12 : month + num;
  const newYear = Math.floor((month + num - 1) / 12) + year;
  return `${newYear}.${newMonth.toString().padStart(2, "0")}.${newDay
    .toString()
    .padStart(2, "0")}`;
}

result;

function solution(today, terms, privacies) {
  // { 약관 : 유효 개월 } 값을 담는 객체 생성
  const obj = {};

  // 약관별 개월 수를 객체에 갱신
  terms.forEach((i) => {
    obj[i[0]] = parseInt(i.split(" ")[1]);
  });

  // 개인별 정보 수집 날짜를 date 배열에 담는다.
  const date = privacies.map((i) => {
    let a = i.split(" ");
    return a[0].split(".").map((i) => parseInt(i));
  });

  // 개인별 약관정보를 배열에 담는다
  const reserve = privacies.map((i) => {
    let a = i.split(" ");
    return a[1];
  });

  // 반복한다.
  for (let i = 0; i < reserve.length; i++) {
    // 약관에 따라 개월 수에 값을 합한다.
    date[i][1] = date[i][1] + obj[reserve[i]];

    // 합한 개월이 12가 넘는 경우 년도에 1 추가 후 개월을 갱신
    if (date[i][1] > 12) {
      date[i][1] = date[i][1] - 12;
      date[i][0]++;
    }
  }

  // 오늘 일자를 날짜객체에 알맞게 가공 => [년, 월, 일]
  today = today.split(".").map((i) => parseInt(i));

  // 반환할 결과값을 담는 배열 생성
  let result = [];

  date.forEach((i, idx) => {
    // Date 객체 사용
    const a = new Date(...today);
    const b = new Date(...i);

    // 두 날짜를 비교한 뒤 결과 배열에 전송
    if (a >= b) {
      result.push(idx + 1);
    }
  });

  // 결과 배열 출력
  return result;
}
