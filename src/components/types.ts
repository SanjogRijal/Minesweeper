export interface Cell {
  revealed: boolean;
  flagged: boolean;
  mine: boolean;
  adjacentMines: number;
}
