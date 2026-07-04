function isValidSudoku1(board: string[][]): boolean {
  let isValid = true;

  const rows = Array.from({ length: 9 }, () => new Map<string, number>());
  const cols = Array.from({ length: 9 }, () => new Map<string, number>());
  const boxes = Array.from({ length: 9 }, () => new Map<string, number>());

  for (let row = 0; row < 9; row++) {
    if (!isValid) {
      break;
    }
    for (let col = 0; col < 9; col++) {
      const item = board[row][col];
      if (item === ".") {
        continue;
      }

      // check in row
      const rowItemCount = (rows[row].get(item) || 0) + 1;
      if (rowItemCount > 1) {
        isValid = false;
        break;
      }
      rows[row].set(item, rowItemCount);

      const colItemCount = (cols[col].get(item) || 0) + 1;
      if (colItemCount > 1) {
        isValid = false;
        break;
      }
      cols[col].set(item, colItemCount);

      const boxIdx = Math.floor(row / 3) * 3 + Math.floor(col / 3);
      const boxItemCount = (boxes[boxIdx].get(item) || 0) + 1;
      if (boxItemCount > 1) {
        isValid = false;
        break;
      }
      boxes[boxIdx].set(item, boxItemCount);
    }
  }

  return isValid;
}

console.log(
  "-->VALID?:",
  isValidSudoku1([
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
  isValidSudoku1([
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
