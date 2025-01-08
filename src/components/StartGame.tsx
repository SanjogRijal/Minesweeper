/* eslint-disable @typescript-eslint/no-explicit-any */
import { DIFFICULTY } from "@/constants/constants";
import { generateBoard } from "@/utils";

interface IProps {
  difficulty: string;
  setBoard: any;
  setGameOver: any;
}

export default function StartGameButton({
  difficulty,
  setBoard,
  setGameOver,
}: IProps) {
  const startGame = () => {
    const { rows, cols, mines } = (DIFFICULTY as any)[difficulty];
    const newBoard = generateBoard(rows, cols, mines);
    setBoard(newBoard as any);
    setGameOver(false);
  };
  return (
    <button className="start-game-btn" onClick={startGame}>
      Start Game
    </button>
  );
}
