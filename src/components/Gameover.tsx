/* eslint-disable @typescript-eslint/no-explicit-any */
import { DIFFICULTY } from "@/constants/constants";
import { generateBoard } from "@/utils";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  difficulty: string;
  setBoard: Dispatch<SetStateAction<any[]>>;
  setGameOver: Dispatch<SetStateAction<boolean>>;
}

export default function GameOver({
  difficulty,
  setBoard,
  setGameOver,
}: IProps) {
  return (
    <div className="game-over-container">
      <div className="gameover-message">Game Over</div>
      <button
        className="try-again-btn mt-1"
        style={{
          marginTop: "10vh",
        }}
        onClick={() => {
          const { rows, cols, mines } = (DIFFICULTY as any)[difficulty];
          const newBoard = generateBoard(rows, cols, mines);
          setBoard(newBoard as any);
          setGameOver(false);
        }}
      >
        Try Again
      </button>
    </div>
  );
}
