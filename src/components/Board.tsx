/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from "react";
import { Cell } from "./types";
import { revealCell } from "@/utils";
import { WIN_MESSAGE } from "@/constants/constants";
import GameOver from "./Gameover";

interface IProps {
  difficulty: string;
  board: any[];
  setBoard: Dispatch<SetStateAction<any[]>>;
  gameOver: boolean;
  setGameOver: Dispatch<SetStateAction<boolean>>;
  win: boolean;
  setWin: Dispatch<SetStateAction<boolean>>;
}

export default function BoardComponent({
  difficulty,
  board,
  setBoard,
  gameOver,
  setGameOver,
  win,
  setWin,
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

  function handleCellClick(row: number, col: number) {
    if (gameOver || win || board[row][col].revealed || board[row][col].flagged)
      return;

    const newBoard = [...board];
    if (newBoard[row][col].mine) {
      board[row][col].revealed = true;
      setGameOver(true);
    } else {
      revealCell(newBoard, row, col);
      if (checkWin(newBoard)) {
        setWin(true);
        setGameOver(true);
      }
    }
    setBoard(newBoard);
  }

  const checkWin = (board: Cell[][]): boolean => {
    return board.every((row) =>
      row.every(
        (cell) => (cell.mine && cell.flagged) || (!cell.mine && cell.revealed)
      )
    );
  };
  return (
    <>
      {gameOver && (
        <GameOver
          difficulty={difficulty}
          setBoard={setBoard}
          setGameOver={setGameOver}
        />
      )}
      {win && <div className="win"> {WIN_MESSAGE}</div>}
      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell: Cell, colIndex: number) => (
              <div
                key={colIndex}
                className={`cell ${cell.revealed ? "revealed" : ""} ${
                  cell.flagged ? "flagged" : ""
                }`}
                onClick={() => handleCellClick(rowIndex, colIndex)}
                onContextMenu={(e) => handleRightClick(e, rowIndex, colIndex)}
              >
                {cell.revealed && cell.mine ? "💣" : ""}
                {cell.revealed && !cell.mine && cell.adjacentMines > 0
                  ? cell.adjacentMines
                  : ""}
                {cell.flagged && !cell.revealed ? "🚩" : ""}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
