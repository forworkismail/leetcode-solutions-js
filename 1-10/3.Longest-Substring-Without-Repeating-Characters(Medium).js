// Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbbefghja"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
const lengthOfLongestSubstring = (str) => {

  // Store counters for the the start of the window and the longest string's length
  let startOfWindow = 0, longestStringLength = 0;

  // Initialise a Map to store the characters of the current string
  let characterMap = {};

  // Loop through the provided string
  for (let i = 0; i < str.length; i++) {

    // Check if current character exists in the Map, and was found within the current window
    if (characterMap[str[i]] >= startOfWindow) {
      // Move the current window to start after the first instance of the current character
      startOfWindow = characterMap[str[i]] + 1;
    }

    // Add the current character to the Map with its position in the string
    characterMap[str[i]] = i;

    // Store the current string length if bigger than the existing record
    if ((i - startOfWindow) + 1 > longestStringLength) {
      longestStringLength = (i - startOfWindow) + 1;
    }
  }

  return longestStringLength;
};
