/*
//! 3702. Longest Subsequence With Non-Zero Bitwise XOR
Solved


You are given an integer array nums.

Return the length of the longest

in nums whose bitwise XOR is non-zero. If no such subsequence exists, return 0.

 

Example 1:

Input: nums = [1,2,3]

Output: 2

Explanation:

One longest subsequence is [2, 3]. The bitwise XOR is computed as 2 XOR 3 = 1, which is non-zero.

Example 2:

Input: nums = [2,3,4]

Output: 3

Explanation:

The longest subsequence is [2, 3, 4]. The bitwise XOR is computed as 2 XOR 3 XOR 4 = 5, which is non-zero.

 

Constraints:

    1 <= nums.length <= 105
    0 <= nums[i] <= 109

*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubsequence = function (nums) {
  // a^b=0 it is subsequence
  let xorSum = 0;
  let allZero = true;
  for (let num of nums) {
    xorSum ^= num;
    if (num !== 0) allZero = false;
  }
  if (allZero) return 0;
  return xorSum !== 0 ? nums.length : nums.length - 1;
};
