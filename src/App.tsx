import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { Instructions } from './components/instructions'
import { Results } from './components/results'
import { Header } from './components/header'
import { Board } from './components/board'
import CountdownTimer from './components/board/timer'
import { dictionary } from './dictionary/words.js'
import { useLocalStorage } from './hooks/useLocalStorage.ts'
import { GameStatus } from './components/types.ts'
import { removeAccents } from './helpers/format.ts'

const App = (): JSX.Element => {
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Playing)
  const [selectedWord, setSelectedWord] = useState<string>('')
  const [usedWords, setUsedWords] = useState<string[]>([])
  const [showInstruccions, setShowInstruccions] = useState<boolean>(false)
  const [showStatistics, setShowStatistics] = useState<boolean>(false)
  const [victories, setVictories] = useLocalStorage('victories', 0)
  const [plays, setPlays] = useLocalStorage('plays', 0)
  const [gameReset, setGameReset] = useState<boolean>(false)

  useEffect(() => {
    const isNewPlayer = Cookies.get('newPlayer')
    if (isNewPlayer === undefined) setShowInstruccions(true)
    getNewWord()
  }, [])

  useEffect(() => {
    setShowStatistics(gameStatus === GameStatus.Won || gameStatus === GameStatus.Lost)
    if (gameStatus === GameStatus.Won) {
      setVictories(victories + 1)
      setPlays(plays + 1)
    }

    if (gameStatus === GameStatus.Lost) {
      setPlays(plays + 1)
    }
  }, [gameStatus])

  function getNewWord () {
    const randomIndex = Math.floor(Math.random() * dictionary.length)
    let word = dictionary[randomIndex]

    while (word.length !== 5 || usedWords.includes(word)) {
      const newIndex = Math.floor(Math.random() * dictionary.length)
      word = dictionary[newIndex]
    }

    setUsedWords((prevUsedWords) => [...prevUsedWords, word])

    setSelectedWord(removeAccents(word.toUpperCase()))
  }

  function resetGame () {
    setGameReset(true)
    getNewWord()
    setGameStatus(GameStatus.Playing)
  }

  return (
    <div className=' bg-neutral-50 dark:bg-slate-900 w-full h-full'>
        <Instructions show={showInstruccions} close={setShowInstruccions}/>
        <Results show={showStatistics} close={setShowStatistics} word={selectedWord} plays={plays} victories={victories} gameStatus={gameStatus}>
          <CountdownTimer setNewGame={resetGame}/>
        </Results>
        <div className="flex flex-col items-center pt-4 h-screen w-screen">
          <Header showInstructions={setShowInstruccions} showStadistics={setShowStatistics}/>
          <Board selectedWord={selectedWord} gameStatus={gameStatus} setGameStatus={setGameStatus} isReset={gameReset} setReset={setGameReset}/>
        </div>
    </div>
  )
}

export default App
