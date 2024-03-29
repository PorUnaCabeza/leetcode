/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let dp = new Array(101);
  dp[0] = 0;
  dp[1] = 1;
  if (n < 2) {
    return dp[n];
  }
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
  }
  return dp[n];
};

