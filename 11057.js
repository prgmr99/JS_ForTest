const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", async function () {
  let n = input[0] * 1;

  let answer = orum(n);
  console.log(answer);
  process.exit();
});

function orum(n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  }
  arr[0] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  if (n === 1) return 10;
  for (let i = 1; i <= n; i++) {
    arr[i][9] = arr[i - 1][9] % 10007;
    arr[i][8] = (arr[i][9] + arr[i - 1][8]) % 10007;
    arr[i][7] = (arr[i][8] + arr[i - 1][7]) % 10007;
    arr[i][6] = (arr[i][7] + arr[i - 1][6]) % 10007;
    arr[i][5] = (arr[i][6] + arr[i - 1][5]) % 10007;
    arr[i][4] = (arr[i][5] + arr[i - 1][4]) % 10007;
    arr[i][3] = (arr[i][4] + arr[i - 1][3]) % 10007;
    arr[i][2] = (arr[i][3] + arr[i - 1][2]) % 10007;
    arr[i][1] = (arr[i][2] + arr[i - 1][1]) % 10007;
    arr[i][0] = (arr[i][1] + arr[i - 1][0]) % 10007;
  }
  return arr[n][0] % 10007;
}
