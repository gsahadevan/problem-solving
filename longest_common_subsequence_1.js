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
    return lcs(text1, text2, text1.length, text2.length);
};

function lcs(x, y, n, m) {
    // base condition
    if (n == 0 || m == 0) {
        return 0;
    }

    // based on choice
    if (x[n - 1] == y[m - 1]) {
        return 1 + lcs(x, y, n - 1, m - 1);
    } else {
        return Math.max(lcs(x, y, n, m - 1), lcs(x, y, n - 1, m));
    }
}

console.log(longestCommonSubsequence('abcde', 'ace')) // should be 3
console.log(longestCommonSubsequence('abcdgh', 'abedfhr')) // should be 4
// console.log(longestCommonSubsequence('mhunuzqrkzsnidwbun', 'szulspmhwpazoxijwbq')); // should be 6 - but got TLE