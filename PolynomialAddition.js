// 내 풀이
function solution(polynomial) {
  const arr = polynomial.split(" + ");
  let num = 0;
  let xNum = 0;
  let str = "";

  arr.map((e) => {
    if (!e.includes("x")) {
      num += Number(e);
    } else {
      let deleteX = e.replace("x", "");
      if (deleteX === "") {
        deleteX = "1";
      }
      xNum += Number(deleteX);
    }
  });

  if (xNum === 0) {
    str += num.toString();
  } else if (num === 0) {
    if (xNum === 1) {
      str += xNum.toString().replace("1", "") + "x";
    } else {
      str += xNum.toString() + "x";
    }
  } else {
    if (xNum === 1) {
      str += xNum.toString().replace("1", "") + "x";
      str += " + ";
      str += num.toString();
    } else {
      str += xNum.toString() + "x";
      str += " + ";
      str += num.toString();
    }
  }
  return str;
}

// 리팩토링한 코드
function solution(polynomial) {
  const terms = polynomial.split(" + ");
  let constantTerm = 0;
  let coefficientX = 0;
  let result = "";

  terms.forEach((term) => {
    if (!term.includes("x")) {
      constantTerm += Number(term);
    } else {
      const coefficient = term.replace("x", "") || "1"; // falsy 값인 경우 '1'을 저장함.
      coefficientX += Number(coefficient);
    }
  });

  if (coefficientX !== 0) {
    result += coefficientX === 1 ? "x" : `${coefficientX}x`;
  }

  if (constantTerm !== 0) {
    result += result ? ` + ${constantTerm}` : `${constantTerm}`;
  }

  return result || "0"; // 다항식이 0인 경우 '0'을 반환
}
