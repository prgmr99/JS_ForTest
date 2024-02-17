const str = "1S2D*3T";

const test = "S";

const strArr = str.split("");
let num;
let sum = 0;

for (let i = 0; i < strArr.length; i++) {
  if (strArr[i] >= 0 && strArr[i] <= 9) {
    num = Number(strArr[i]);
  }
  if (strArr[i] === "S") {
    sum += num;
  }
  if (strArr[i] === "D") {
    sum += num * num;
  }
  if (strArr[i] === "T") {
    sum += num * num * num;
  }
}
