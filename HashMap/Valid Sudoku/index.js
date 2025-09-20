//Sure! The Valid Sudoku problem is about checking whether a partially filled 9×9 Sudoku board is valid according to Sudoku rules:

//Each row must have no duplicate digits (1-9).

//Each column must have no duplicate digits (1-9).

//Each of the 9 3×3 sub-boxes must have no duplicate digits (1-9).

//Empty cells are denoted by '.'.


function isValidSudoku(board) {
  const rows = Array.from({ length: 9 }, () => new Set());
  const cols = Array.from({ length: 9 }, () => new Set());
  const boxes = Array.from({ length: 9 }, () => new Set());

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const val = board[r][c];
      if (val === '.') continue;

      // Check row
      if (rows[r].has(val)) return false;
      rows[r].add(val);

      // Check column
      if (cols[c].has(val)) return false;
      cols[c].add(val);

      // Check box
      const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
      if (boxes[boxIndex].has(val)) return false;
      boxes[boxIndex].add(val);
    }
  }

  return true;
}

// Example usage
const board = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

console.log(isValidSudoku(board)); // true
