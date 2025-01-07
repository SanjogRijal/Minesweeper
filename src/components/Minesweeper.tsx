/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import HeaderComponent from "./Header";
import DifficultyComponent from "./Difficulty";
import BoardComponent from "./Board";
import StartGameButton from "./StartGame";

function Minesweeper() {
  const [difficulty, setDifficulty] = useState<string>("Easy");
  const [board, setBoard] = useState<any[]>([]);
  const [gameOver, setGameOver] = useState(false);
  return (
    <div className="Minesweeper">
      <HeaderComponent />
      <div>
        <DifficultyComponent
          difficulty={difficulty}
          setDifficulty={setDifficulty}
        />
      </div>
      <div>
        <StartGameButton
          setGameOver={setGameOver}
          difficulty={difficulty}
          setBoard={setBoard}
        />
      </div>
      <BoardComponent
        board={board}
        setBoard={setBoard}
        gameOver={gameOver}
        setGameOver={setGameOver}
      />
    </div>
  );
}

export default Minesweeper;
