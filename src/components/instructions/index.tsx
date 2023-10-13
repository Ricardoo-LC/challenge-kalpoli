import { Letter } from '../board/letter'

interface Props {
  show: boolean;
}

export const Instructions = ({ show }: Props) => {
  const handleClick = () => {
    console.log('test')
  }

  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-5 z-40">
        <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-[#262B3C] border border-slate-400 text-white">
            <div className="w-full ">
                <div className="m-8 my-20 max-w-[400px] mx-auto">
                    <h1 className="mb-4 text-3xl font-roboto font-bold text-center">Cómo jugar</h1>
                    <p className="whitespace-pre-wrap">
                        Adivina la palabra oculta en cinco intentos.

                        Cada intento debe ser una palabra válida de 5 letras.

                        Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra.

                        Ejemplos
                    </p>
                    <div className='pt-4 grid grid-cols-5 gap-5'>
                        {Array.from(Array(5)).map((_, index) => (
                            <Letter key={index} value={'G'} status={'correct'}/>
                        ))}
                    </div>
                    <p className="whitespace-pre-wrap">
                        La letra G está en la palabra y en la posición correcta.
                    </p>
                    <div className='pt-4 grid grid-cols-5 gap-5'>
                        {Array.from(Array(5)).map((_, index) => (
                            <Letter key={index} value={'G'} status={'correct'}/>
                        ))}
                    </div>
                    <p className="whitespace-pre-wrap">
                        La letra C está en la palabra pero en la posición incorrecta.
                    </p>
                    <div className='pt-4 grid grid-cols-5 gap-5'>
                        {Array.from(Array(5)).map((_, index) => (
                            <Letter key={index} value={'G'} status={'correct'}/>
                        ))}
                    </div>
                    <p className="whitespace-pre-wrap">
                        La letra O no está en la palabra.
                    </p>
                    <p className="whitespace-pre-wrap">
                        Puede haber letras repetidas. Las pistas son independientes para cada letra.
                    </p>
                    <p className="whitespace-pre-wrap">
                        ¡Una palabra nueva cada 5 minutos!
                    </p>
                    <div className="space-y-4">
                        <button className="p-3 bg-correct border rounded-full font-semibold" onClick={handleClick}>!JUGAR¡</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
