/*
todo: 42. Trapping Rain Water
Hard
Topics
premium lock icon
Companies
Given n non-negative integers representing an elevation map where the width of each bar is 1, 
compute how much water it can trap after raining.

 

Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by 
array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) 
are being trapped.

Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9
 
Constraints:
n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105
*/
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let result = 0;
  while (leftPointer < rightPointer) {
    if (height[leftPointer] < height[rightPointer]) {
      leftMax = Math.max(leftMax, height[leftPointer]);
      result += leftMax - height[leftPointer];
      leftPointer++;
    } else {
      rightMax = Math.max(rightMax, height[rightPointer]);
      result += rightMax - height[rightPointer];
      rightPointer--;
    }
  }
  return result;
};
const res1 = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
const res2 = trap([4, 2, 0, 3, 2, 5]);

console.log(`Result->${res1},${res2}`);
