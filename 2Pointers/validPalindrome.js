/*
todo: 125. Valid Palindrome
Easy
Topics
premium lock icon
Companies
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.

*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  leftPointer = 0;
  rightPointer = s.length - 1;
  while (leftPointer < rightPointer) {
    if (s[leftPointer] !== s[rightPointer]) return false;
    leftPointer++;
    rightPointer--;
  }
  return true;
};
const res1 = isPalindrome("A man, a plan, a canal: Panama");
const res2 = isPalindrome("race a car");
const res3 = isPalindrome("");
console.log(`Result->${res1},${res2},${res3}`);
