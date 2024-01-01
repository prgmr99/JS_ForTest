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
