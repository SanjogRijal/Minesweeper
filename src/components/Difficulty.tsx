/* eslint-disable @typescript-eslint/no-explicit-any */
import { DIFFICULTY } from "@/constants/constants";

interface IProps {
  difficulty: string;
  setDifficulty: any;
}

export default function DifficultyComponent({
  difficulty,
  setDifficulty,
}: IProps) {
  return (
    <>
      <label>Difficulty: </label>
      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        {Object.keys(DIFFICULTY).map((level) => (
          <option key={level} value={level}>
            {level}
          </option>
        ))}
      </select>
    </>
  );
}
