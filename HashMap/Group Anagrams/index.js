// Problem Statement: Group Anagrams

// Given an array of strings strs, group the anagrams together.

// An anagram is a word formed by rearranging the letters of another word, using all the original letters exactly once.

// Return the result as a list of lists of strings.

// You can return the answer in any order.

// Example 1
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

// Example 2
// Input: strs = [""]
// Output: [[""]]

// Example 3
// Input: strs = ["a"]
// Output: [["a"]]

// Constraints

// 1 <= strs.length <= 10^4

// 0 <= strs[i].length <= 100

// strs[i] consists of lowercase English letters.


function groupAnagrams(strs) {
  const map = new Map();

  for (let str of strs) {
    // Sort the string to use as key
    const key = str.split('').sort().join('');
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(str);
  }

  return Array.from(map.values());
}

// Example usage
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// [["eat","tea","ate"],["tan","nat"],["bat"]]
console.log(groupAnagrams([""]));
// [[""]]
console.log(groupAnagrams(["a"]));
// [["a"]]