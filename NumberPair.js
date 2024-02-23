function solution(X, Y) {
  let result = 0;

  let xArr = X.split("").map(Number);
  let yArr = Y.split("").map(Number);
  let temp = [...yArr];

  for (let i = 0; i < xArr.length; i++) {
    if (yArr.includes(xArr[i])) {
      const index = yArr.indexOf(xArr[i]);
      yArr.splice(index, 1);
    }
  }

  yArr.forEach((element) => {
    const indexInTemp = temp.indexOf(element);
    if (indexInTemp !== -1) {
      temp.splice(indexInTemp, 1);
    }
  });

  temp.sort((a, b) => b - a);

  if (temp[0] === 0) {
    result = "0";
  } else if (temp.length === 0) {
    result = "-1";
  } else {
    result = temp.join("");
  }

  return result;
}
