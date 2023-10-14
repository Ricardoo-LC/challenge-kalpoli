import { LetterStatus } from '../types'
import { Letter } from './letter'

interface WordCurrentProps {
  word: string;
}

const WordCurrent = ({ word }: WordCurrentProps) => {
  return (
    <div className='pt-4 grid grid-cols-5 gap-5'>
        {word.split('').map((letter, index) => (
            <Letter key={index} value={letter} status="edit"/>
        ))}
         {Array.from(Array(5 - word.length)).map((letter, index) => (
            <Letter key={index} value="" status="edit"/>
         ))}
    </div>
  )
}

export default WordCurrent
