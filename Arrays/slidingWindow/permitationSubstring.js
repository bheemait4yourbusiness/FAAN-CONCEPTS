/*
todo: 567. Permutation in String
Medium
Topics
premium lock icon
Companies
Hint
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
In other words, return true if one of s1's permutations is the substring of s2.

Example 1:
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:
Input: s1 = "ab", s2 = "eidboaoo"
Output: false
 
Constraints:
1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.
*/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  // 1.create frequencyMAp for S1
  let charsArray = new Array(26).fill(0);
  let uniqueChars = 0;
  let asciA = "a".charCodeAt(0);
  for (let char of s1) {
    const currChar = char.charCodeAt(0) - asciA;
    charsArray[currChar]++;
    if (charsArray[currChar] === 1) {
      uniqueChars++;
    }
  }
  windowSize = s1.length;
  // 2.slide Window on S2 with length s1
  for (let i = 0; i <= s2.length; i++) {
    const currChar = s2.charCodeAt(i) - asciA;
    charsArray[currChar]--;

    if (charsArray[currChar] === 0) {
      uniqueChars--;
    }
    // change window elements
    if (i >= windowSize) {
      const leftChar = s2.charCodeAt(i - windowSize) - asciA;
      charsArray[leftChar]++;
      if (charsArray[leftChar] === 1) {
        uniqueChars++;
      }
    }

    if (uniqueChars === 0) {
      return true;
    }
  }
  console.log(`UniqueChars->${uniqueChars}`);

  return false;
};

const res1 = checkInclusion("ab", "eidbaooo");
const res2 = checkInclusion("ab", "eidboaoo");
console.log(`Result->${res1},${res2}`);