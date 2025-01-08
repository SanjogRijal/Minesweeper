/* eslint-disable @typescript-eslint/no-explicit-any */
import { DIFFICULTY, DIFFICULTY_CHOICE } from "@/constants/constants";

interface IProps {
  difficulty: string;
  setDifficulty: any;
  wrapperStyle?: any;
}

export default function DifficultyComponent({
  difficulty,
  setDifficulty,
  wrapperStyle,
}: IProps) {
  return (
    <div className="difficulty-wrapper" style={wrapperStyle}>
      <label className="difficulty-label">{DIFFICULTY_CHOICE}</label>
      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        className="difficulty-select"
      >
        {Object.keys(DIFFICULTY).map((level) => (
          <option key={level} value={level}>
            {level}
          </option>
        ))}
      </select>
    </div>
  );
}
