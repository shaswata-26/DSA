function intToRoman(num) {
  const values = [
    1000, 900, 500, 400,
    100, 90, 50, 40,
    10, 9, 5, 4, 1
  ];
  const symbols = [
    "M", "CM", "D", "CD",
    "C", "XC", "L", "XL",
    "X", "IX", "V", "IV", "I"
  ];

  let res = "";

  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      num -= values[i];
      res += symbols[i];
    }
  }

  return res;
}

// Example usage
console.log(intToRoman(3));    // "III"
console.log(intToRoman(58));   // "LVIII"
console.log(intToRoman(1994)); // "MCMXCIV"
