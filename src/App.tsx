import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { Instructions } from './components/instructions'
import { Results } from './components/results'
import { Header } from './components/header'
import { Board } from './components/board'
import CountdownTimer from './components/board/timer'
import { dictionary } from './dictionary/words.js'
import { useLocalStorage } from './hooks/useLocalStorage.js'

const App = (): JSX.Element => {
  const [selectedWord, setSelectedWord] = useState<string>('')
  const [usedWords, setUsedWords] = useState<string[]>([])
  const [showInstruccions, setShowInstruccions] = useState<boolean>(true)
  const [showStatistics, setShowStatistics] = useState<boolean>(false)
  const [victories, setVictories] = useLocalStorage('victories', 0)
  const [plays, setPlays] = useLocalStorage('plays', 0)

  useEffect(() => {
    const isNewPlayer = Cookies.get('newPlayer')
    if (isNewPlayer !== undefined) setShowInstruccions(false)
    getNewWord()
  }, [])

  function getNewWord () {
    const randomIndex = Math.floor(Math.random() * dictionary.length)
    let word = dictionary[randomIndex]

    while (word.length !== 5 || usedWords.includes(word)) {
      const newIndex = Math.floor(Math.random() * dictionary.length)
      word = dictionary[newIndex]
    }

    setUsedWords((prevUsedWords) => [...prevUsedWords, word])
    setSelectedWord(word.toUpperCase())
  }

  return (
    <div className=' bg-neutral-50 dark:bg-slate-900 w-screen h-screen'>
        <Instructions show={showInstruccions} close={setShowInstruccions}/>
        <Results show={showStatistics} close={setShowStatistics} word={selectedWord} plays={plays} victories={victories}>
          <CountdownTimer setNewWord={() => getNewWord()}/>
        </Results>
        <div className="flex flex-col items-center h-[100vh] pt-4 w-full">
          <Header showInstructions={setShowInstruccions} showStadistics={setShowStatistics}/>
          <Board selectedWord={selectedWord}/>
        </div>
    </div>
  )
}

export default App
