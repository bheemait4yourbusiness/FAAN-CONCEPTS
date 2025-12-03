/*
todo: 3704. Count No-Zero Pairs That Sum to N
Solved
Hard


A no-zero integer is a positive integer that does not contain the digit 0 in its decimal representation.

Given an integer n, count the number of pairs (a, b) where:

    a and b are no-zero integers.
    a + b = n

Return an integer denoting the number of such pairs.

 

Example 1:
Input: n = 2
Output: 1
Explanation:
The only pair is (1, 1).

Example 2:
Input: n = 3
Output: 2
Explanation:
The pairs are (1, 2) and (2, 1).

Example 3:
Input: n = 11
Output: 8
Explanation:

The pairs are (2, 9), (3, 8), (4, 7), (5, 6), (6, 5), (7, 4), (8, 3), and (9, 2). Note that (1, 10) and (10, 1) do not satisfy the conditions because 10 contains 0 in its decimal representation.


Constraints:
    2 <= n <= 1015
*/ 
/*

Intuition

Overall idea boils down to looking at the last digit (digit).

We can either obtain it directly, leaving the number without the last digit (tens) for the recursive step, or obtain it from 10 + digit, which leaves the number without the last digit but with one borrowed from the tens (tens - 1) for the recursive step.

Furthermore, each time tens (or tens - 1) doesn’t contain a 0, we can form two additional valid splits: tens = 0 + tens = tens + 0 (or tens - 1 = 0 + (tens - 1) = (tens - 1) + 0).
Complexity

If T(n) denotes the time complexity of helper(n), we can express it recursively as T(n) = T(n/10 - 1) + T(n/10) + O(1).

Solving this gives T(n)= O(2 ^ log_10(n)) = O(n ^ log_10(2)), which matches the overall complexity of the entire solution, since helper(n) is called only once and the rest of the remaining operations are O(1).

The exact same O(n ^ log_10(2)) space complexity is used, as we only need to keep track of the recursive call stack and memoization map.

Time complexity: O(n ^ log_10(2))
Space complexity: O(n ^ log_10(2))

*/ 


/**
 * @param {number} n
 * @return {number}
 */
var countNoZeroPairs = function(n) {
    const memo = new Map();

  const helper = (n) => {
    if (n < 10) {
      return n ? n - 1 : 1;
    }
    if (memo.has(n)) {
      return memo.get(n);
    }
    const digit = n % 10, tens = Math.floor(n / 10);
    const result = (
      (helper(tens - 1) + (String(tens - 1).includes("0") ? 0 : 2)) * (9 - digit) +
      (helper(tens) + (String(tens).includes("0") ? 0 : 2)) * (digit ? digit - 1 : 0)
    );
    memo.set(n, result);
    return result;
  }

  return helper(n);
};