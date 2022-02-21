var coins = [1, 2, 3];
var amount = 5;

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    var dp = Array(coins.length + 1)
    .fill()
    .map(() => Array(amount + 1).fill(-1));

    kp(dp, amount, coins.length);
    return dp[amount][coins.length];
};

function kp(dp, w, n) {
    if (w == 0 || n == 0) return 0;

    if (coins[n -1] <= w) {
        dp[n][w] = kp(dp, w - coins[n-1], n-1) + kp(dp, w, n-1);
    } else {
        dp[n][w] = kp(dp, w, n-1);
    }
}


console.log(change(amount, coins));
