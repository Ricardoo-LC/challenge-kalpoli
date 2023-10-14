import { Key } from './key'
import { keyboardLayout } from '../types'

interface KeyBoardProps {
  onKeyPressed: (key: string) => void;
}

const Keyboard = ({ onKeyPressed }: KeyBoardProps) => {
  return (
    <div className="relative flex flex-col items-center rounded-[15px]  mx-auto p-4 bg-neutral-200 bg-clip-border shadow-md shadow-[#F3F3F3] dark:bg-slate-800 dark:text-white dark:shadow-none">
        <div className="flex items-center justify-between rounded-t-3xl p-3 w-full">
            <div className='grid grid-cols-10 gap-2'>
              {keyboardLayout.map((row, rowIndex) => (
                row.map((letter, colIndex) => (
                  <Key key={`${rowIndex}-${colIndex}`} value={letter} status={'empty'} onKeyPressed={onKeyPressed}/>
                ))
              ))}
            </div>
        </div>
    </div>
  )
}

export default Keyboard
