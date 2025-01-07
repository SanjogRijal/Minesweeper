---

# **Minesweeper App**

A modern Minesweeper game built with **ReactJS**, featuring customizable difficulty levels, a sleek user interface, and interactive gameplay.

---

## **Table of Contents**
1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Game Rules](#game-rules)
5. [Screenshots](#screenshots)
6. [Contributing](#contributing)
7. [License](#license)

---

## **Features**
- Dynamic game board generation based on difficulty:
  - Easy: 8x8 grid with 10 mines.
  - Medium: 16x16 grid with 40 mines.
  - Hard: 24x24 grid with 99 mines.
- Interactive gameplay:
  - Left-click to reveal cells.
  - Right-click to flag/unflag cells.
- Recursive reveal for empty cells.
- Win and Game Over states.
- Responsive design.

---

## **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/minesweeper-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd minesweeper-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

---

## **Usage**

1. Select the difficulty level from the dropdown menu.
2. Click **Start Game** to generate the board.
3. Interact with the board:
   - **Left-click**: Reveal the cell.
   - **Right-click**: Flag or unflag a cell.
4. Win by revealing all non-mine cells or flagging all mines correctly.

---

## **Game Rules**

- If you click a mine, the game ends (Game Over).
- Empty cells automatically reveal neighboring empty cells.
- The numbers on cells indicate how many neighboring mines are present.
- Flag cells you suspect contain mines.
- You win when all non-mine cells are revealed or all mines are flagged.

---

## **Acknowledgments**
- Inspired by the classic Minesweeper game.
- Built using ReactJS.
