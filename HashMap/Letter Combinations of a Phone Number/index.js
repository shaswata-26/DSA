function letterCombinations(digits) {
  if (!digits.length) return [];

  const map = {
    '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
    '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
  };

  const res = [];

  function backtrack(index, path) {
    if (path.length === digits.length) {
      res.push(path);
      return;
    }

    const letters = map[digits[index]];
    for (let char of letters) {
      backtrack(index + 1, path + char);
    }
  }

  backtrack(0, "");
  return res;
}

// Example usage
console.log(letterCombinations("23"));
// ["ad","ae","af","bd","be","bf","cd","ce","cf"]
