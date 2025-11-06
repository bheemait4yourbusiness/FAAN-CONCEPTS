/*
todo: 3. Longest Substring Without Repeating Characters
Medium
Topics
premium lock icon
Companies
Hint
Given a string s, find the length of the longest substring without duplicate characters. 

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:
0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.

*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let leftPointer = 0;
  let rightPointer = 0;
  let uniqueString = 0;
  let freqCharsMap = new Map();
  for (rightPointer; rightPointer < s.length; rightPointer++) {
    const curr = s[rightPointer];
    freqCharsMap.set(curr, (freqCharsMap.get(curr) || 0) + 1);
    // 2.check for duplicates
    while (freqCharsMap.get(curr) > 1) {
      const leftChar = s[leftPointer];
      freqCharsMap.set(leftChar, freqCharsMap.get(leftChar) - 1);
      leftPointer++;
    }
    uniqueString = Math.max(uniqueString, rightPointer - leftPointer + 1);
  }
  return uniqueString;
};
// const res1 = lengthOfLongestSubstring("bbbbb");
const res1 = lengthOfLongestSubstring("eidbaooo");
const res2 = lengthOfLongestSubstring("pwwkew");
console.log(`Result->${res1},${res2}`);
