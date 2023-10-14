import { LetterStatus } from '../types'

interface KeyProps {
  value: string;
  status: LetterStatus;
  onKeyPressed: (key: string) => void;
}

export const Key = ({ value, status, onKeyPressed }: KeyProps) => {
  const widhtBoxes = {
    ENTER: 'w-20',
    DELETE: 'w-20',
    default: 'w-12'
  }

  const eventsKeys = {
    ENTER: (e: any) => handleEnter(e),
    DELETE: (e: any) => handleDelete(e),
    default: (e: any) => handleInput(e)
  }

  function handleInput (e: any) {
    onKeyPressed(e.target.textContent)
  }

  function handleEnter (e: any) {
    onKeyPressed('ENTER')
  }

  function handleDelete (e: any) {
    onKeyPressed('BACKSPACE')
  }

  const widhtBox = widhtBoxes[value] || widhtBoxes.default
  const eventKey = eventsKeys[value] || eventsKeys.default

  return (
    <div className={`h-14 ${widhtBox} bg-gray-300 dark:bg-[#565F7E] rounded-[5px] flex items-center justify-center text-center cursor-pointer`} onClick={(e) => eventKey(e)}>
      <p className="text-xl font-bold font-roboto text-stone-600 dark:text-white">
        {value === 'DELETE'
          ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
          </svg>
            )
          : (value.toUpperCase())}
      </p>
    </div>
  )
}
