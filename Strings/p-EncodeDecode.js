/*
todo: Encode and Decode Strings
Design an algorithm to encode a list of strings to a single string. 
The encoded string is then decoded back to the original list of strings.

Please implement encode and decode

Example 1:

Input: ["neet","code","love","you"]

Output:["neet","code","love","you"]
Example 2:

Input: ["we","say",":","yes"]

Output: ["we","say",":","yes"]
Constraints:

0 <= strs.length < 100
0 <= strs[i].length < 200
strs[i] contains only UTF-8 characters.

*/
/**
 * Encodes a list of strings to a single string.
 * Format: [length_as_4chars][string_content][length_as_4chars][string_content]...
 * Each string is prefixed with its length encoded as 4 characters
 * @param strs Array of strings to encode
 * @return Encoded single string
 */
function encode(strs) {
  let encodedResult = "";

  for (const str of strs) {
    // Get the length of current string
    const length = str.length;

    // Convert length to 4-character string representation
    // Using 4 characters to store the length value
    const lengthChars = String.fromCharCode(
      (length >> 24) & 0xff,
      (length >> 16) & 0xff,
      (length >> 8) & 0xff,
      length & 0xff
    );

    // Append the length as 4 characters
    encodedResult += lengthChars;

    // Append the actual string content
    encodedResult += str;
  }

  return encodedResult;
}

/**
 * Decodes a single string back to a list of strings.
 * Reads the encoded format: [length_as_4chars][string_content]...
 *
 * @param s Encoded string to decode
 * @return Array of decoded strings
 */
function decode(s) {
  const decodedStrings = [];
  let currentPos = 0;
  const totalLength = s.length;

  while (currentPos < totalLength) {
    // Read the length of the next string (4 characters)
    const stringLength =
      (s.charCodeAt(currentPos) << 24) |
      (s.charCodeAt(currentPos + 1) << 16) |
      (s.charCodeAt(currentPos + 2) << 8) |
      s.charCodeAt(currentPos + 3);
    currentPos += 4;

    // Extract the string content based on the length read
    decodedStrings.push(s.substring(currentPos, currentPos + stringLength));
    currentPos += stringLength;
  }

  return decodedStrings;
}
