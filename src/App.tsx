import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { Instructions } from './components/instructions'
import { Results } from './components/results'

const App = (): JSX.Element => {
  const [showInstruccions, setShowInstruccions] = useState(false)
  const [showStatistics, setShowStatistics] = useState(false)

  useEffect(() => {
    const isNewPlayer = Cookies.get('newPlayer')
    if (isNewPlayer !== undefined) setShowInstruccions(true)
  }, [])

  return (
    <div>
        <Instructions show={showInstruccions}/>
        <Results show={showStatistics}/>
    </div>
  )
}

export default App
