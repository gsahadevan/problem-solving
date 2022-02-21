/**
 * Given two strings text1 and text2, return the length of their longest common subsequence.
 * If there is no common subsequence, return 0.
 * A subsequence of a string is a new string generated from the original string with some characters (can be none)
 * deleted without changing the relative order of the remaining characters.
 *
 * For example, "ace" is a subsequence of "abcde".
 * A common subsequence of two strings is a subsequence that is common to both strings.
 *
 * Example 1:
 * Input: text1 = "abcde", text2 = "ace"
 * Output: 3
 * Explanation: The longest common subsequence is "ace" and its length is 3.
 *
 * Example 2:
 * Input: text1 = "abc", text2 = "abc"
 * Output: 3
 * Explanation: The longest common subsequence is "abc" and its length is 3.
 *
 * Example 3:
 * Input: text1 = "abc", text2 = "def"
 * Output: 0
 * Explanation: There is no such common subsequence, so the result is 0.
 *
 * Constraints:
 * 1 <= text1.length, text2.length <= 1000
 * text1 and text2 consist of only lowercase English characters.
 *
 * https://leetcode.com/problems/longest-common-subsequence/
 */

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    const m = text1.length;
    const n = text2.length;

    // base condition
    if (m == 0 || n == 0) {
        return 0;
    }

    // dp table - initialize with zero
    let dp = Array(m + 1)
        .fill()
        .map(() => Array(n + 1).fill(0));

    // Iteration instead of recursion
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] == text2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
            }
        }
    }

    return dp[m][n];
};

console.log(longestCommonSubsequence('abcde', 'ace')); // should be 3
console.log(longestCommonSubsequence('abcdgh', 'abedfhr')); // should be 4
console.log(longestCommonSubsequence('mhunuzqrkzsnidwbun', 'szulspmhwpazoxijwbq')); // should be 6 - but got TLE

/**
 * Final results
 * Time Submitted       Status                  Runtime     Memory      Language
 * 02/21/2022 11:27	    Accepted	            108 ms	    53.3 MB	    javascript
 * 02/18/2022 18:45	    Accepted	            134 ms	    53 MB	    javascript
 * 02/18/2022 18:12	    Time Limit Exceeded	    N/A	        N/A	        javascript
 */
