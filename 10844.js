const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const dp = Array.from({ length: n + 1 }, () =>
  Array.from({ length: n + 1 }, () => 0)
);
const mod = 1000000000;

for (let i = 1; i < 10; i++) {
  dp[1][i] = 1;
}

for (let i = 2; i <= n; i++) {
  for (let j = 0; j < 10; j++) {
    if (j === 0) dp[i][0] = dp[i - 1][1];
    else if (j === 9) dp[i][9] = dp[i - 1][8];
    else dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j + 1];

    dp[i][j] %= mod;
  }
}

let ans = 0;
for (let i = 0; i < 10; i++) {
  ans += dp[n][i];
  ans %= mod;
}

console.log(ans);
