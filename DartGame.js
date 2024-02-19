function solution(dartResult) {
  const result = [];
  let temp = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
        temp = 10;
        i++;
      } else {
        temp = +dartResult[i];
      }
    } else if (dartResult[i] === "S") {
      result.push(temp);
    } else if (dartResult[i] === "D") {
      result.push(Math.pow(temp, 2));
    } else if (dartResult[i] === "T") {
      result.push(Math.pow(temp, 3));
    } else if (dartResult[i] === "#") {
      result[result.length - 1] *= -1;
    } else if (dartResult[i] === "*") {
      result[result.length - 1] *= 2;
      result[result.length - 2] *= 2;
    }
  }

  const sum = result.reduce((a, c) => (a += c), 0);

  return sum;
}

// 다른 사람 풀이
function solution(dartResult) {
  const bonus = { S: 1, D: 2, T: 3 },
    options = { "*": 2, "#": -1, undefined: 1 };

  let darts = dartResult.match(/\d.?\D/g);
  // ? 없거나 최대 한 개만
  // \d 숫자
  // \D 숫자가 아닌 것
  // . 모든 문자열(숫자, 한글, 영어, 특수문자, 공백 모두)
  // g 문자열 내 모든 패턴 검색

  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
      score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];
    // (^\d{1,}): 시작 지점에 1회 이상의 숫자에 매칭
    // (S|D|T): 'S', 'D', 또는 'T'에 매칭
    // (\*|#)?: 옵션으로 '*' 또는 '#'에 0 또는 1회 매칭
    // 이 정규표현식은 다트 결과에서 각 판의 점수, 보너스, 옵션을 추출합니다.
    if (split[3] === "*" && darts[i - 1]) darts[i - 1] *= options["*"];

    darts[i] = score;
  }

  return darts.reduce((a, b) => a + b);
}

solution("1S2D*3T");
