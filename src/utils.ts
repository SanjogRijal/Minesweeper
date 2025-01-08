import { Cell } from "./components/types";

export const countAdjacentMines = (
  board: Cell[][],
  row: number,
  col: number
): number => {
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  let count = 0;
  directions.forEach(([dx, dy]) => {
    const newRow = row + dx;
    const newCol = col + dy;
    if (
      newRow >= 0 &&
      newRow < board.length &&
      newCol >= 0 &&
      newCol < board[0].length &&
      board[newRow][newCol].mine
    ) {
      count++;
    }
  });
  return count;
};

export const generateBoard = (
  rows: number,
  cols: number,
  mines: number
): Cell[][] => {
  const board = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => ({
      revealed: false,
      flagged: false,
      mine: false,
      adjacentMines: 0,
    }))
  );

  let mineCount = 0;
  while (mineCount < mines) {
    const r = Math.floor(Math.random() * rows);
    const c = Math.floor(Math.random() * cols);
    if (!board[r][c].mine) {
      board[r][c].mine = true;
      mineCount++;
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (!board[row][col].mine) {
        board[row][col].adjacentMines = countAdjacentMines(board, row, col);
      }
    }
  }
  return board;
};

export const revealCell = (board: Cell[][], row: number, col: number): void => {
  if (
    row < 0 ||
    col < 0 ||
    row >= board.length ||
    col >= board[0].length ||
    board[row][col].revealed ||
    board[row][col].flagged
  ) {
    return;
  }

  board[row][col].revealed = true;

  if (board[row][col].adjacentMines === 0) {
    const directions = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];

    directions.forEach(([dx, dy]) => {
      revealCell(board, row + dx, col + dy);
    });
  }
};
