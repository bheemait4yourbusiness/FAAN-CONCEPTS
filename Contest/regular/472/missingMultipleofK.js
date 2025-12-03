/*
todo: 3718. Smallest Missing Multiple of K
Easy
Given an integer array nums and an integer k, return the 
smallest positive multiple of k that is missing from nums.
A multiple of k is any positive integer divisible by k.

 
Example 1:
Input: nums = [8,2,3,4,6], k = 2
Output: 10
Explanation:
The multiples of k = 2 are 2, 4, 6, 8, 10, 12... and the smallest multiple missing from nums is 10.

Example 2:
Input: nums = [1,4,7,10,15], k = 5
Output: 5
Explanation:
The multiples of k = 5 are 5, 10, 15, 20... and the smallest multiple missing from nums is 5.

Constraints:

    1 <= nums.length <= 100
    1 <= nums[i] <= 100
    1 <= k <= 100

*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function (nums, k) {
  let resultArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % k === 0) {
      resultArr.push(nums[i]);
    }
  }
  console.log(`Resutl=>,${resultArr}`);
  const sortedArray = resultArr.sort((a, b) => a - b);
  console.log(`sortedArray=>,${sortedArray}`);
};

const res1 = missingMultiple([8, 2, 3, 4, 6], 2);
console.log(res1);
