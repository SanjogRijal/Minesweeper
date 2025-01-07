export const generateBoard = (rows: number, cols: number, mines: number) => {
  const board = Array(rows)
    .fill(null)
    .map(() =>
      Array(cols).fill({ revealed: false, flagged: false, mine: false })
    );

  let mineCount = 0;
  while (mineCount < mines) {
    const r = Math.floor(Math.random() * rows);
    const c = Math.floor(Math.random() * cols);
    if (!board[r][c].mine) {
      board[r][c] = { ...board[r][c], mine: true };
      mineCount++;
    }
  }
  return board;
};
