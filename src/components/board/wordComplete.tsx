import { LetterStatus } from '../types'
import { Letter } from './letter'

interface WordProps {
  word: string;
  input: string;
}

const WordComplete = ({ word, input }: WordProps) => {
  function checkLetter (letter: string, position: number): LetterStatus {
    if (word.includes(letter)) {
      if (word[position] === letter) {
        return 'correct'
      } else {
        return 'present'
      }
    } else {
      return 'absent'
    }
  }

  return (
    <div className="pt-4 grid grid-cols-5 gap-5">
      {Array.from(Array(5)).map((_, index) => (
        <Letter
          key={index}
          value={input[index]}
          status={checkLetter(input[index], index)}
        />
      ))}
    </div>
  )
}

export default WordComplete
