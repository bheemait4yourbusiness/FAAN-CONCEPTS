/*
todo: 239. Sliding Window Maximum
Hard

You are given an array of integers nums, 
there is a sliding window of size k which is moving from the very left of the array 
to the very right. You can only see the k numbers in the window. Each time 
the sliding window moves right by one position.

Return the max sliding window.

 

Example 1:
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7

 Example 2:
Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
1 <= k <= nums.length
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindow(nums, k) {
  const deque = []; // store indices
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    // remove elements out of window
    while (deque.length && deque[0] <= i - k) {
      deque.shift();
    }

    // remove smaller elements
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    // add current element index
    deque.push(i);

    // record max (front of deque) after first k elements
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}
const res1 = maxSlidingWindow([1, 3, 2, -1, -3, 6, 5, 3, 6, 7, 8], 3);
console.log("Result->", res1);
