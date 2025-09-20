const arr = [1, 2, 2, 3, 1, 4, 2, 3, 5];

// Create frequency object
const freq = {};

for (let num of arr) {
  if (freq[num]) {
    freq[num] += 1;
  } else {
    freq[num] = 1;
  }
}

// Print frequencies
console.log("Element frequencies:");
for (let key in freq) {
  console.log(`${key} -> ${freq[key]}`);
}
