// Problem Statement: Sudoku Solver

// You are given a 9×9 Sudoku board represented as a 2D array of characters. Some of the cells are filled with digits '1' to '9', and empty cells are represented by '.'.

// Your task is to fill the empty cells so that the final board satisfies the rules of Sudoku:

// Each row must contain the digits 1-9 without repetition.

// Each column must contain the digits 1-9 without repetition.

// Each of the nine 3×3 sub-boxes must contain the digits 1-9 without repetition.

// It is guaranteed that the input board has only one valid solution.
//input
// [
//  ["5","3",".",".","7",".",".",".","."],
//  ["6",".",".","1","9","5",".",".","."],
//  [".","9","8",".",".",".",".","6","."],
//  ["8",".",".",".","6",".",".",".","3"],
//  ["4",".",".","8",".","3",".",".","1"],
//  ["7",".",".",".","2",".",".",".","6"],
//  [".","6",".",".",".",".","2","8","."],
//  [".",".",".","4","1","9",".",".","5"],
//  [".",".",".",".","8",".",".","7","9"]
// ]
//output
// [
//  ["5","3","4","6","7","8","9","1","2"],
//  ["6","7","2","1","9","5","3","4","8"],
//  ["1","9","8","3","4","2","5","6","7"],
//  ["8","5","9","7","6","1","4","2","3"],
//  ["4","2","6","8","5","3","7","9","1"],
//  ["7","1","3","9","2","4","8","5","6"],
//  ["9","6","1","5","3","7","2","8","4"],
//  ["2","8","7","4","1","9","6","3","5"],
//  ["3","4","5","2","8","6","1","7","9"]
// ]


function solveSudoku(board) {
  function isValid(r, c, char) {
    for (let i = 0; i < 9; i++) {
      if (board[r][i] === char) return false;          // check row
      if (board[i][c] === char) return false;          // check column
      const boxRow = 3 * Math.floor(r / 3) + Math.floor(i / 3);
      const boxCol = 3 * Math.floor(c / 3) + i % 3;
      if (board[boxRow][boxCol] === char) return false; // check 3x3 box
    }
    return true;
  }

  function backtrack() {
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (board[r][c] === '.') {
          for (let num = 1; num <= 9; num++) {
            const char = num.toString();
            if (isValid(r, c, char)) {
              board[r][c] = char;
              if (backtrack()) return true;
              board[r][c] = '.';
            }
          }
          return false; // if no number works
        }
      }
    }
    return true; // all cells filled
  }

  backtrack();
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

solveSudoku(board);
console.log(board);
