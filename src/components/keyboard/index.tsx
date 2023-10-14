import { Key } from './key'
import { keyboardLayout } from '../types'

interface KeyBoardProps {
  onKeyPressed: (key: string) => void;
}

const marginKey = [
  'ml-8',
  'ml-10',
  ''
]

const paddingRow = [
  'p-0',
  'p-2',
  ''
]

const Keyboard = ({ onKeyPressed }: KeyBoardProps) => {
  return (
    <div className="flex flex-col rounded-[15px] p-5 bg-neutral-200 bg-clip-border shadow-md shadow-[#F3F3F3] dark:bg-slate-800 dark:text-white dark:shadow-none">
      {keyboardLayout.map((row, rowIndex) => (
        <div key={`${rowIndex}`} className={`flex items-center  ${paddingRow[rowIndex]}  ${marginKey[rowIndex]}`}>
            <div className={`grid grid-rows-${rowIndex === 2 ? '9' : '10'} grid-flow-col gap-2`}>
                {row.map((letter, colIndex) => (
                  <Key key={`${colIndex}`} value={letter} status={'empty'} onKeyPressed={onKeyPressed}/>
                ))}
            </div>
        </div>
      ))}
    </div>
  )
}

export default Keyboard
