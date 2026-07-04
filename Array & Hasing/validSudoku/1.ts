const isRowValid = (row: string[]): boolean => {
  const freqArr = Array.from({ length: 9 }, () => 0);

  row.forEach((element) => {
    if (isNaN(+element)) return;
    freqArr[+element - 1] += 1;
  });

  return freqArr.every((element) => element < 2);
};

const isEachColValid = (board: string[][]): boolean => {
  let isValid = true;
  for (let i = 0; i < 9; i++) {
    const freqArr = Array.from({ length: 9 }, () => 0);
    for (let j = 0; j < 9; j++) {
      if (isNaN(+board[j][i])) continue;
      freqArr[+board[j][i] - 1] += 1;
    }

    isValid = freqArr.every((element) => element < 2);

    if (!isValid) break;
  }

  return isValid;
};

const isValidSubMatrix = (board: string[][]): boolean => {
  let isValid = true;

  const newBoard: string[][] = [];
  for (let k = 0; k < 9; k += 3) {
    for (let m = 0; m < 9; m += 3) {
      const row = new Array();
      for (let i = k; i < k + 3; i++) {
        for (let j = m; j < m + 3; j++) {
          row.push(board[i][j]);
        }
      }
      newBoard.push(row);
    }
  }
  newBoard.forEach((row) => {
    isValid &&= isRowValid(row);
  });

  return isValid;
};

function isValidSudoku(board: string[][]): boolean {
  let isValid = true;
  board.forEach((row) => {
    isValid &&= isRowValid(row);
  });

  if (!isValid) return isValid;

  isValid = isEachColValid(board) && isValidSubMatrix(board);

  return isValid;
}

console.log(
  "-->VALID?:",
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ]),
);

console.log(
  "-->VALID?:",
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ]),
);
