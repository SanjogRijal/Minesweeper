/* eslint-disable @typescript-eslint/no-explicit-any */
import { GAME_HEADING } from "@/constants/constants";

export default function HeaderComponent({ style }: { style?: any }) {
  return <h1 style={style || {}}>{GAME_HEADING}</h1>;
}
