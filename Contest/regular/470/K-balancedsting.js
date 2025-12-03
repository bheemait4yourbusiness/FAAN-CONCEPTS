/*
// ! 3703. Remove K-Balanced Substrings Medium
premium lock iconCompanies
Hint

You are given a string s consisting of '(' and ')', and an integer k.

A string is k-balanced if it is exactly k consecutive '(' followed by k consecutive ')', i.e., '(' * k + ')' * k.

For example, if k = 3, k-balanced is "((()))".

You must repeatedly remove all non-overlapping k-balanced

from s, and then join the remaining parts. Continue this process until no k-balanced substring exists.

Return the final string after all possible removals.

 

​​​​​​​Example 1:

Input: s = "(())", k = 1

Output: ""

Explanation:

k-balanced substring is "()"
Step	Current s	k-balanced	Result s
1	(())	(())	()
2	()	()	Empty

Thus, the final string is "".

Example 2:

Input: s = "(()(", k = 1

Output: "(("

Explanation:

k-balanced substring is "()"
Step	Current s	k-balanced	Result s
1	(()(	(()(	((
2	((	-	((

Thus, the final string is "((".

Example 3:

Input: s = "((()))()()()", k = 3

Output: "()()()"

Explanation:

k-balanced substring is "((()))"
Step	Current s	k-balanced	Result s
1	((()))()()()	((()))()()()	()()()
2	()()()	-	()()()

Thus, the final string is "()()()".

 

Constraints:

    2 <= s.length <= 105
    s consists only of '(' and ')'.
    1 <= k <= s.length / 2

*/
/*
//?SOLUTION:
Intuition

We need to repeatedly remove a substring formed by k opening brackets followed by k closing brackets.
Approach

    Construct the target pattern: k '(' followed by k ')'.
    Traverse the string using a sliding index.
    If the current window matches the pattern, remove it and move the index back to handle overlaps.
    Continue until no more patterns can be removed.

Complexity

    Time complexity: O(n * k) (substring check + deletions)

    Space complexity: O(n) (StringBuilder storage)

*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeSubstring = function (s, k) {
  if (k === 0) {
    return s;
  }

  const pattern = "(".repeat(k) + ")".repeat(k);

  // Use a loop to keep replacing the pattern as long as it exists in the string
  while (s.includes(pattern)) {
    s = s.replace(pattern, "");
  }

  return s;
};
