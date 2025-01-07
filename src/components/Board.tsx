/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetStateAction } from "react";

interface IProps {
  board: any[];
  setBoard: SetStateAction<any>;
  gameOver: boolean;
  setGameOver: SetStateAction<any>;
}

export default function BoardComponent({
  board,
  setBoard,
  gameOver,
  setGameOver,
}: IProps) {
  const handleRightClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    row: number,
    col: string | number
  ) => {
    e.preventDefault();
    if (gameOver || (board[row][col] as any).revealed) return;

    const newBoard = [...board];
    (newBoard[row][col] as any).flagged = !(newBoard[row][col] as any).flagged;
    setBoard(newBoard);
  };

  const handleCellClick = (row: number, col: string | number) => {
    if (gameOver || (board[row][col] as any).revealed) return;

    const newBoard = [...board];
    (newBoard[row][col] as any).revealed = true;

    if ((newBoard[row][col] as any).mine) {
      setGameOver(true);
      alert("Game Over!");
    }
    setBoard(newBoard);
  };
  return (
    <div className="board">
      {board.map((row: any, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map(
            (
              cell: { revealed: any; flagged: any; mine: any },
              colIndex: React.Key | null | undefined
            ) => (
              <div
                key={colIndex}
                className={`cell ${cell.revealed ? "revealed" : ""} ${
                  cell.flagged ? "flagged" : ""
                }`}
                onClick={() => handleCellClick(rowIndex, colIndex as any)}
                onContextMenu={(e) =>
                  handleRightClick(e, rowIndex, colIndex as any)
                }
              >
                {cell.revealed && cell.mine ? "💣" : ""}
                {cell.flagged && !cell.revealed ? "🚩" : ""}
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
}
