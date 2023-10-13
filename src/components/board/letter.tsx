import { LetterStatus } from '../types'

interface LetterProps {
  value: string;
  status: LetterStatus
}

export const Letter = ({ value, status }: LetterProps) => {
  const bgClasses = {
    correct: 'bg-correct',
    present: 'bg-present',
    absent: 'bg-absent',
    default: 'bg-empty'
  }

  const bgClass = bgClasses[status] || bgClasses.default

  return (
    <div className={`h-20 w-20 p-4 ${bgClass} rounded-[5px] flex items-center justify-center text-center`}>
      <p className="text-3xl font-bold font-roboto tracking-[.10em] text-white">
        {value.toUpperCase()}
      </p>
    </div>
  )
}
