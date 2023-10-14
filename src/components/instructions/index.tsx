import Cookies from 'js-cookie'
import { Letter } from '../board/letter'

interface Props {
  show: boolean;
  close: (value: boolean) => void;
}

const LETTER_CORRECT = 'GATOS'
const LETTER_PRESENT = 'VOCAL'
const LETTER_ABSENT = 'CANTO'

export const Instructions = ({ show, close }: Props) => {
  const handleClick = () => {
    close(false)
    Cookies.set('newPlayer', 'true', { expires: 30 })
  }

  return (
    <div className={`fixed flex h-full w-full items-center justify-center bg-black bg-opacity-50 z-40 transition-transform transition-opacity duration-500 ${show ? 'modal' : 'modal-closed'}`}
      >
        <div className="max-h-full w-full max-w-xl sm:rounded-2xl bg-slate-50 border border-neutral-950 text-black font-medium dark:bg-[#262B3C] dark:border dark:border-slate-400 dark:text-white">
                <div className="my-10 mx-10">
                    <h1 className="mb-4 text-3xl font-roboto font-bold text-center">Cómo jugar</h1>
                    <p className="whitespace-normal">
                        Adivina la palabra oculta en cinco intentos.
                    </p>
                     <p className="whitespace-normal pt-4">
                        Cada intento debe ser una palabra válida de 5 letras.
                    </p>
                     <p className="whitespace-normal pt-4">
                        Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra.
                    </p>
                    <p className="whitespace-normal pt-4 font-bold">
                        Ejemplos
                    </p>
                    <div className='pt-4 grid grid-cols-5 gap-5'>
                        {LETTER_CORRECT.split('').map((letter, index) => (
                            <Letter key={index} value={letter} status={letter === 'G' ? 'correct' : 'instructions'}/>
                        ))}
                    </div>
                    <p className="whitespace-normal pt-3">
                        La letra <span className='font-bold'>G</span> está en la palabra y en la posición correcta.
                    </p>
                    <div className='pt-3 grid grid-cols-5 gap-5'>
                         {LETTER_PRESENT.split('').map((letter, index) => (
                            <Letter key={index} value={letter} status={letter === 'C' ? 'present' : 'instructions'}/>
                         ))}
                    </div>
                    <p className="whitespace-normal pt-3 ">
                        La letra <span className='font-bold'>C</span> está en la palabra pero en la posición incorrecta.
                    </p>
                    <div className='pt-3 grid grid-cols-5 gap-5'>
                         {LETTER_ABSENT.split('').map((letter, index) => (
                            <Letter key={index} value={letter} status={letter === 'O' ? 'absent' : 'instructions'}/>
                         ))}
                    </div>
                    <p className="whitespace-normal pt-3">
                        La letra <span className='font-bold'>O</span> no está en la palabra.
                    </p>
                    <p className="whitespace-normal pt-6">
                        Puede haber letras repetidas. Las pistas son independientes para cada letra.
                    </p>
                    <p className="whitespace-normal text-center p-5">
                        ¡Una palabra nueva cada 5 minutos!
                    </p>
                    <div className="space-y-4 flex items-center justify-center">
                        <button className="px-16 py-1 bg-correct rounded-[5px] text-2xl font-roboto font-semibold text-center text-white" onClick={handleClick}>!JUGAR¡</button>
                    </div>
                </div>
        </div>
    </div>
  )
}
