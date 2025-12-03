/*
todo: 3713. Longest Balanced Substring I
Medium
premium lock iconCompanies
Hint

You are given a string s consisting of lowercase English letters.

A

of s is called balanced if all distinct characters in the substring appear the 
same number of times.
Return the length of the longest balanced substring of s.

Example 1:
Input: s = "abbac"
Output: 4
Explanation:
The longest balanced substring is "abba" because both distinct characters 'a' and 'b' each 
appear exactly 2 times.

Example 2:
Input: s = "zzabccy"
Output: 4
Explanation:
The longest balanced substring is "zabc" because the distinct characters 'z', 'a', 'b', and 'c' 
each appear exactly 1 time.​​​​​​​

Example 3:
Input: s = "aba"
Output: 2
Explanation:
One of the longest balanced substrings is "ab" because both distinct characters 'a' and 'b' 
each appear exactly 1 time. Another longest balanced substring is "ba".

 Constraints:

    1 <= s.length <= 1000
    s consists of lowercase English letters.

*/
/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function (s) {
  let balancedStirng = 0;
  for (let i = 0; i < s.length; i++) {
    const hash = new Map();
    for (let j = i; j < s.length; j++) {
      hash.set(s[j], (hash.get(s[j]) || 0) + 1);
      const count = [...hash.values()];
      const isBalance = count.every((c) => c === count[0]);
      if (isBalance) {
        balancedStirng = Math.max(balancedStirng, j - i + 1);
      }
    }
  }
  return balancedStirng;
};
const result = longestBalanced("abbac");
console.log("result->", result);
