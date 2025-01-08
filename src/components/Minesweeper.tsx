/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import HeaderComponent from "./Header";
import DifficultyComponent from "./Difficulty";
import BoardComponent from "./Board";
import StartGameButton from "./StartGame";
import Footer from "./Footer";

function Minesweeper() {
  const [difficulty, setDifficulty] = useState<string>("Easy");
  const [board, setBoard] = useState<any[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);

  return (
    <>
      <div className="Minesweeper">
        <div className="header-container">
          <HeaderComponent />
        </div>
        <div className="controls-container">
          <DifficultyComponent
            difficulty={difficulty}
            setDifficulty={setDifficulty}
          />
          <StartGameButton
            setGameOver={setGameOver}
            difficulty={difficulty}
            setBoard={setBoard}
          />
        </div>
        <div className="board-container">
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
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Minesweeper;
