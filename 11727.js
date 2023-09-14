const stdin = require("fs").readFileSync(0, "utf8").trim().split("\n");
const N = +stdin[0];
const dp = Array(1001).fill(0);
dp[1] = 1;
dp[2] = 3;

for (let i = 3; i <= N; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
}

console.log(dp[N]);
