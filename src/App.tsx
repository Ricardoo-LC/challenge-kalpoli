import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { Instructions } from './components/instructions'
import { Results } from './components/results'
import { Header } from './components/header'
import { Board } from './components/board'
import { Keyboard } from './components/keyboard'

const App = (): JSX.Element => {
  const [showInstruccions, setShowInstruccions] = useState(true)
  const [showStatistics, setShowStatistics] = useState(false)
  const [isRunning, setIsRunning] = useState(true)
  const [resetTimer, setResetTimer] = useState(false)

  useEffect(() => {
    const isNewPlayer = Cookies.get('newPlayer')
    if (isNewPlayer !== undefined) setShowInstruccions(false)
  }, [])

  return (
    <div className=' bg-neutral-50 dark:bg-slate-900 w-screen h-screen'>
        <Instructions show={showInstruccions} close={setShowInstruccions}/>
        <Results show={showStatistics} close={setShowStatistics}/>
        <div className="flex flex-col items-center h-[100vh] pt-4 w-full">
          <Header/>
          <Board/>
          {/* <Keyboard /> */}
        </div>

    </div>
  )
}

export default App
