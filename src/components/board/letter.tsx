import { LetterStatus } from '../types'

interface LetterProps {
  value: string;
  status: LetterStatus;
}

export const Letter = ({ value, status }: LetterProps) => {
  const bgClasses = {
    correct: 'bg-correct',
    present: 'bg-present',
    absent: 'bg-absent',
    instructions: 'bg-instructions dark:bg-[#262B3C]',
    default: 'bg-gray-300 dark:bg-empty'
  }

  const bgClass = bgClasses[status] || bgClasses.default

  return (
    <div
      className={`md:h-12 md:w-12 lg:h-16 lg:w-16 2xl:h-20 2xl:w-20 p-4 ${bgClass} rounded-[5px] flex items-center justify-center text-center ${
        status === 'instructions'
          ? 'border-2 border-neutral-500/100 dark:border dark:border-neutral-200'
          : ''
      } `}
    >
      <p
        className={`text-3xl font-bold font-roboto tracking-[.10em] ${
          status === 'instructions'
            ? 'text-black dark:text-white'
            : 'text-white'
        } uppercase`}
      >
        {value}
      </p>
    </div>
  )
}
