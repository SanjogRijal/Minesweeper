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
  const [win, setWin] = useState(false);
  const commonStyle: any = {
    position: "relative",
    top: "20px",
  };
  return (
    <div className="Minesweeper">
      <div>
        <HeaderComponent />
      </div>
      <div style={commonStyle}>
        <DifficultyComponent
          difficulty={difficulty}
          setDifficulty={setDifficulty}
        />
      </div>
      <div style={{ ...commonStyle, top: "25px" }}>
        <StartGameButton
          setGameOver={setGameOver}
          difficulty={difficulty}
          setBoard={setBoard}
        />
      </div>
      <div style={commonStyle}>
        <BoardComponent
          difficulty={difficulty}
          win={win}
          setWin={setWin}
          board={board}
          setBoard={setBoard}
          gameOver={gameOver}
          setGameOver={setGameOver}
        />
      </div>
    </div>
  );
}

export default Minesweeper;
