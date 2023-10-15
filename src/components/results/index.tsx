import { ReactNode } from 'react'
import { GameStatus } from '../types'

interface Props {
  children: ReactNode;
  show: boolean;
  close: (value: boolean) => void;
  word: string;
  plays: number;
  victories: number;
  gameStatus: GameStatus;
}

export const Results = ({
  children,
  show,
  close,
  word,
  plays,
  victories,
  gameStatus
}: Props) => {
  const handleClick = () => {
    close(false)
  }

  return (
    <div
      className={`fixed flex h-full w-full items-center justify-center bg-black bg-opacity-50 z-40 transition-transform transition-opacity duration-500 ${
        show ? 'modal' : 'modal-closed'
      }`}
    >
      <div className="max-h-full w-full max-w-xl sm:rounded-2xl bg-[#F3F3F3] border border-slate-800 text-black dark:bg-[#262B3C] dark:border dark:border-slate-400 dark:text-white">
        <div className="my-10 mx-20">
          <h1 className="mb-4 text-3xl font-roboto font-bold text-center">
            Estadísticas
          </h1>
          <div className="flex items-center justify-between rounded-t-3xl p-3 w-full">
            <div className="text-center">
              <h1 className="mb-4 text-3xl font-roboto font-bold text-center">
                {plays}
              </h1>
              <span className="mt-2 text-xl font-semibold">Jugadas</span>
            </div>
            <div className="text-center">
              <h1 className="mb-4 text-3xl font-roboto font-bold text-center">
                {victories}
              </h1>
              <span className="mt-2 text-xl font-semibold">Victorias</span>
            </div>
          </div>
          {gameStatus === GameStatus.Lost && (
            <p className="whitespace-normal text-center pt-6">
              La palabra era: {word}
            </p>
          )}
          <p className="whitespace-normal text-center pt-6">
            SIGUIENTE PALABRA
          </p>
          <p className="whitespace-normal text-2xl text-center font-bold p-5">
            {children}
          </p>
          <div className="space-y-4 flex items-center justify-center">
            <button
              className="px-16 py-1 bg-correct rounded-[5px] text-2xl font-roboto font-semibold text-center text-white"
              onClick={handleClick}
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
