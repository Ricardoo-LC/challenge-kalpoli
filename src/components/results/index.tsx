interface Props {
  show: boolean;
  close: (value: boolean) => void;
}

export const Results = ({ show, close }: Props) => {
  const handleClick = () => {
    close(false)
  }

  return (
    <div className={`fixed flex h-full w-full items-center justify-center bg-black bg-opacity-50 z-40 transition-transform transition-opacity duration-500 ${show ? 'modal' : 'modal-closed'}`}>
        <div className="max-h-full w-full max-w-xl sm:rounded-2xl bg-[#262B3C] border border-slate-400 text-white">
                <div className="my-10 mx-20">
                    <h1 className="mb-4 text-3xl font-roboto font-bold text-center">Estadísticas</h1>
                    <div className="flex items-center justify-between rounded-t-3xl p-3 w-full">
                          <div className="text-center">
                        <h1 className="mb-4 text-3xl font-roboto font-bold text-center">8</h1>
                        <span className="mt-2 text-xl">Jugadas</span>
                    </div>
                    <div className="text-center">
                        <h1 className="mb-4 text-3xl font-roboto font-bold text-center">2</h1>
                        <span className="mt-2 text-xl">Victorias</span>
                    </div>
                    </div>
                    <p className="whitespace-normal text-center pt-6">
                        SIGUIENTE PALABRA
                    </p>
                    <p className="whitespace-normal text-center p-5">
                        04:10
                    </p>
                    <div className="space-y-4 flex items-center justify-center">
                        <button className="px-16 py-1 bg-correct rounded-[5px] text-2xl font-roboto font-semibold text-center" onClick={handleClick}>Aceptar</button>
                    </div>
                </div>
        </div>
    </div>
  )
}
