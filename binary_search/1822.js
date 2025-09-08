const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [nA, nB] = input[0].split(" ").map(Number);
const arrayA = input[1].split(" ").map(Number);
const arrayB = input[2].split(" ").map(Number);

const setB = new Set(arrayB);

const difference = arrayA.filter((element) => !setB.has(element));

const count = difference.length;

if (count === 0) {
  console.log(0);
} else {
  console.log(count);
  difference.sort((a, b) => a - b);
  console.log(difference.join(" "));
}
