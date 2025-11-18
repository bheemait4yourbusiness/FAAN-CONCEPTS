/*
todo: 31. Next Permutation
Medium
Topics
premium lock icon
Companies
A permutation of an array of integers is an arrangement of its members into a sequence or 
linear order.

For example, for arr = [1,2,3], the following are all the permutations of 
arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
The next permutation of an array of integers is the next lexicographically greater permutation 
of its integer. More formally, if all the permutations of the array are sorted in 
one container according to their lexicographical order, then the next permutation of that 
array is the permutation that follows it in the sorted container. 
If such arrangement is not possible, the array must be rearranged as the lowest 
possible order (i.e., sorted in ascending order).

For example, the next permutation of arr = [1,2,3] is [1,3,2].
Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a 
lexicographical larger rearrangement.
Given an array of integers nums, find the next permutation of nums.

The replacement must be in place and use only constant extra memory.

 

Example 1:
Input: nums = [1,2,3]
Output: [1,3,2]

Example 2:
Input: nums = [3,2,1]
Output: [1,2,3]

Example 3:
Input: nums = [1,1,5]
Output: [1,5,1]
 
nextPermutation
Constraints:
1 <= nums.length <= 100
0 <= nums[i] <= 100
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  // 1.find breakingElemtn
  const length = nums.length;
  let current = length - 2;
  while (current >= 0 && nums[current] >= nums[current + 1]) {
    current--;
  }

  // 2.swap element with greater value
  if (current >= 0) {
    for (let swap = length - 1; swap > current; swap--) {
      if (nums[swap] > nums[current]) {
        [nums[current], nums[swap]] = [nums[swap], nums[current]];
        break;
      }
    }
  }
  // 3.reverse the rest elements
  let leftPointer = current + 1;
  let rightPointer = length - 1;
  while (leftPointer < rightPointer) {
    [nums[leftPointer], nums[rightPointer]] = [
      nums[rightPointer],
      nums[leftPointer],
    ];
    leftPointer++;
    rightPointer--;
  }
  return nums;
};

/*

function nextPermutation(nums) {
  const length = nums.length;

  // Step 1: Find the rightmost position where nums[i] < nums[i + 1]
  // This is the "pivot" position where we need to make a change
  let pivotIndex = length - 2;
  while (pivotIndex >= 0 && nums[pivotIndex] >= nums[pivotIndex + 1]) {
    pivotIndex--;
  }

  // Step 2: If a valid pivot exists, find the smallest number to its right
  // that is still greater than the pivot, then swap them
  if (pivotIndex >= 0) {
    for (let swapIndex = length - 1; swapIndex > pivotIndex; swapIndex--) {
      if (nums[swapIndex] > nums[pivotIndex]) {
        // Swap the pivot with the found element
        [nums[pivotIndex], nums[swapIndex]] = [
          nums[swapIndex],
          nums[pivotIndex],
        ];
        break;
      }
    }
  }

  // Step 3: Reverse the suffix starting from pivotIndex + 1
  // This ensures we get the next smallest permutation
  let left = pivotIndex + 1;
  let right = length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
  return nums;
}
  */
const res1 = nextPermutation([1, 2, 3]);
const res2 = nextPermutation([3, 2, 1]);
const res3 = nextPermutation([1, 1, 5]);
console.log(`Resutl-->${res1}\n ${res2}\n ${res3}`);
