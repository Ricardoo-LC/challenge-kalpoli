export type LetterStatus =
  | "correct"
  | "present"
  | "absent"
  | "empty"
  | "instructions";

export const keyboardLayout = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DELETE"]
];

export const enum GameStatus {
  Playing,
  Won,
  Lost
}
