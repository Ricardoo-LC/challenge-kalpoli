import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { Instructions } from './components/instructions'
import { Results } from './components/results'
import { Header } from './components/header'
import { Board } from './components/board'
import { Keyboard } from './components/keyboard'

const App = (): JSX.Element => {
  const [theme, setTheme] = useState('dark')
  const [showInstruccions, setShowInstruccions] = useState(false)
  const [showStatistics, setShowStatistics] = useState(false)

  useEffect(() => {
    const isNewPlayer = Cookies.get('newPlayer')
    if (isNewPlayer !== undefined) setShowInstruccions(true)
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html')?.classList.add('dark')
    } else {
      document.querySelector('html')?.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className=' bg-neutral-50 dark:bg-slate-900 w-screen h-screen'>
        <Instructions show={showInstruccions}/>
        {/* <Results show={showStatistics}/>  */}
        <div className="flex flex-col items-center h-[100vh] pt-4 w-full">
          <Header/>
          <Board/>
          {/* <Keyboard /> */}
        </div>

    </div>
  )
}

export default App
