// Problem Statement: Set Matrix Zeroes

// Given an m x n integer matrix, if an element is 0, set its entire row and column to 0.

// You must do it in-place.

// Aim for O(1) extra space (constant space), although simpler solutions with extra memory are allowed.

// Example 1
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

// Example 2
// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// Constraints

// m == matrix.length

// n == matrix[0].length

// 1 <= m, n <= 200

// -2^31 <= matrix[i][j] <= 2^31 - 1

// ✅ JavaScript Solution (Using O(m+n) extra space)

function setZeroes(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const rows = new Set();
  const cols = new Set();

  // Find all zero positions
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i);
        cols.add(j);
      }
    }
  }

  // Set rows to zero
  for (let r of rows) {
    for (let j = 0; j < n; j++) {
      matrix[r][j] = 0;
    }
  }

  // Set columns to zero
  for (let c of cols) {
    for (let i = 0; i < m; i++) {
      matrix[i][c] = 0;
    }
  }
}

// Example usage
let matrix = [
  [1,1,1],
  [1,0,1],
  [1,1,1]
];
setZeroes(matrix);
console.log(matrix);
// [[1,0,1],[0,0,0],[1,0,1]]
