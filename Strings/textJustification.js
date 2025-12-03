/*
todo: 68. Text Justification
Hard
Topics
premium lock icon
Companies
Given an array of strings words and a width maxWidth, format the text such that 
each line has exactly maxWidth characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as 
you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly 
maxWidth characters.

Extra spaces between words should be distributed as evenly as possible. 
If the number of spaces on a line does not divide evenly between words, 
the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left-justified, and no extra space 
is inserted between words.

Note:

A word is defined as a character sequence consisting of non-space characters only.
Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
The input array words contains at least one word.
 

Example 1:
Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]

Example 2:
Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be", 
because the last line must be left-justified instead of fully-justified.
Note that the second line is also left-justified because it contains only one word.

Example 3:
Input: words = 
["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], 
maxWidth = 20
Output:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]
 

Constraints:
1 <= words.length <= 300
1 <= words[i].length <= 20
words[i] consists of only English letters and symbols.
1 <= maxWidth <= 100
words[i].length <= maxWidth

*/
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
// var fullJustify = function (words, maxWidth) {};
function fullJustify(words, maxWidth) {
  const result = [];
  const totalWords = words.length;
  let wordIndex = 0;

  // Process words until all are placed in lines
  while (wordIndex < totalWords) {
    // Build current line by adding words that fit within maxWidth
    const currentLineWords = [words[wordIndex]];
    let currentLineLength = words[wordIndex].length;
    wordIndex++;

    // Keep adding words while they fit (including minimum one space between words)
    while (
      wordIndex < totalWords &&
      currentLineLength + 1 + words[wordIndex].length <= maxWidth
    ) {
      currentLineWords.push(words[wordIndex]);
      currentLineLength += 1 + words[wordIndex].length;
      wordIndex++;
    }

    // Handle last line or single word line - left justified
    if (wordIndex === totalWords || currentLineWords.length === 1) {
      const leftJustifiedText = currentLineWords.join(" ");
      const rightPadding = " ".repeat(maxWidth - leftJustifiedText.length);
      result.push(leftJustifiedText + rightPadding);
      continue;
    }

    // Calculate space distribution for full justification
    // Total spaces needed minus the minimum single spaces between words
    const totalSpacesToDistribute =
      maxWidth - (currentLineLength - currentLineWords.length + 1);
    const gapsBetweenWords = currentLineWords.length - 1;
    const baseSpacesPerGap = Math.floor(
      totalSpacesToDistribute / gapsBetweenWords
    );
    const extraSpaces = totalSpacesToDistribute % gapsBetweenWords;

    // Build the fully justified line
    const justifiedLine = [];
    for (let i = 0; i < currentLineWords.length - 1; i++) {
      justifiedLine.push(currentLineWords[i]);
      // Add base spaces plus one extra space for the first 'extraSpaces' gaps
      const spacesToAdd = baseSpacesPerGap + (i < extraSpaces ? 1 : 0);
      justifiedLine.push(" ".repeat(spacesToAdd));
    }
    // Add the last word without trailing spaces
    justifiedLine.push(currentLineWords[currentLineWords.length - 1]);

    result.push(justifiedLine.join(""));
  }

  return result;
}
const res1 = fullJustify(
  ["This", "is", "an", "example", "of", "text", "justification."],
  16
);
const res2 = fullJustify(
  ["What", "must", "be", "acknowledgment", "shall", "be"],
  (maxWidth = 16)
);
console.log(`Results->${res1}, ${res2}`);
