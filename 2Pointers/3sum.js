/*
todo: 15. 3Sum
Medium
Topics
premium lock iconCompanies
Hint

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.

 

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

Constraints:

    3 <= nums.length <= 3000
    -105 <= nums[i] <= 105


*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (
    let firstIndex = 0;
    firstIndex < nums.length - 2 && nums[firstIndex] <= 0;
    firstIndex++
  ) {
    if (firstIndex > 0 && nums[firstIndex] === nums[firstIndex - 1]) continue;

    let left = firstIndex + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[firstIndex] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[firstIndex], nums[left], nums[right]]);
        left++;
        right--;

        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) left++;
      else right--;
    }
  }

  return result;
}

const res1 = threeSum([-1, 0, 1, 2, -1, -4]);
const res2 = threeSum([0, 1, 1]);
const res3 = threeSum([0, 0, 0]);
console.log(`Result->${res1},${res2},${res3}`);
