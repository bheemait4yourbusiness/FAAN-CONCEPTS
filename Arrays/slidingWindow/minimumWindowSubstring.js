/*
todo: 76. Minimum Window Substring
Hard
Topics
premium lock icon
Companies
Hint
Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 

Constraints:

m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.
 

Follow up: Could you find an algorithm that runs in O(m + n) time?
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s.length < t.length) return "";
  let left = 0;
  let right = 0;

  let created = 0;
  let ans = [-1, 0, 0];
  let hashUniqueChars = new Map();
  // 1.create hashmap for target and uniquechars
  for (let char of s) {
    // if(!hashUniqueChars.get(char)){
    //     hashUniqueChars.set(char,(hashUniqueChars.get(char))+1);
    // }
    hashUniqueChars.set(char, (hashUniqueChars.get(char) ?? 0) + 1);
  }
  let uniqueChars = hashUniqueChars.size;
  let hashString = new Map();
  while (right < s.length) {
    let current = s.charAt(right);

    hashString.set(current, (hashString.get(current) ?? 0) + 1);
    if (
      hashUniqueChars.has(current) &&
      hashUniqueChars.get(current) === hashString.get(current)
    ) {
      created++;
    }
    while (left <= right && created === uniqueChars) {
      const current = s.charAt(left);
      if (ans[0] == -1 || ans[0] >= right - left + 1) {
        ans[0] = right - left + 1;
        ans[1] = left;
        ans[2] = right;
      }
      hashString.set(current, hashString.get(current) - 1);
      if (
        hashUniqueChars.has(current) &&
        hashUniqueChars.get(current) === hashString.get(current)
      ) {
        created--;
      }
      left++;
    }
    right++;
  }
  if (ans[0] === -1) {
    return "";
  }
  return s.substring(ans[1], ans[right] + 1);
};

const res1 = minWindow("ADOBECODEBANC", "ABC");
console.log(`Result->${res1}`);
