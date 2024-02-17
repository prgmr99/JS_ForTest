const str = "1S2D*3T";
const strArr = str.split("");
const partition = [];

let sum = 0;
let starCnt = 0;
let sharpCnt = 0;
let str1 = "";
const totalArr = [];

for (let i = 0; i < strArr.length; i++) {
  if (i !== 0 && strArr[i] <= 9 && strArr[i] >= 0) {
    partition.push(str1);
    str1 = "";
  }
  str1 += strArr[i];
}
partition.push(str1);

partition;

for (let i = 0; i < partition.length; i++) {
  const num = Number(partition[i][0]);
  let total = 0;

  if (partition[i].includes("S")) {
    total += num;
  } else if (partition[i].includes("D")) {
    total += num * num;
  } else if (partition[i].includes("T")) {
    total += num * num * num;
  }

  if (partition[i].includes("*")) {
    total *= 2;
  } else if (partition[i].includes("#")) {
    total *= -1;
  }

  totalArr.push(total);
}

totalArr;
