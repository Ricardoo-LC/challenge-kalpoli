import { useState } from 'react'

import WordComplete from './wordComplete'
import WordCurrent from './wordCurrent'
import WordEmpty from './wordEmpty'

import { useWindow } from '../../hooks/useWindow'
import { GameStatus } from '../types'
import Keyboard from '../keyboard'

interface BoardProps {
  selectedWord: string;
}

const keys = [
  'Q',
  'W',
  'E',
  'R',
  'T',
  'Y',
  'U',
  'I',
  'O',
  'P',
  'A',
  'S',
  'D',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  'Ñ',
  'Z',
  'X',
  'C',
  'V',
  'B',
  'N',
  'M'
]

export const Board = ({ selectedWord }: BoardProps) => {
  const [turn, setTurn] = useState<number>(1)
  const [inputUser, setInputUser] = useState<string>('')
  const [wordsEntered, setWordsEntered] = useState<string[]>([])
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Playing)

  useWindow('keydown', handleKeyDown)

  function handleKeyDown (event: KeyboardEvent) {
    const key = event.key.toUpperCase()

    onKeyPressed(key)
  }

  function onKeyPressed (key: string) {
    if (gameStatus !== GameStatus.Playing) {
      return
    }

    if (key === 'BACKSPACE' && inputUser.length > 0) {
      onDelete()
      return
    }

    if (key === 'ENTER' && inputUser.length === 5 && turn <= 5) {
      onEnter()
      return
    }

    if (inputUser.length >= 5) return

    if (keys.includes(key)) {
      onInput(key)
    }
  }

  function onInput (letter: string) {
    const newWord = inputUser + letter
    setInputUser(newWord)
  }

  function onDelete () {
    const newWord = inputUser.slice(0, -1)
    setInputUser(newWord)
  }

  async function onEnter () {
    if (inputUser === selectedWord) {
      setWordsEntered([...wordsEntered, inputUser])
      setGameStatus(GameStatus.Won)
      return
    }

    if (turn === 5) {
      setWordsEntered([...wordsEntered, inputUser])
      setGameStatus(GameStatus.Lost)
      return
    }

    setWordsEntered([...wordsEntered, inputUser])
    setTurn(turn + 1)
    setInputUser('')
  }

  return (
    <>
    <div className='pt-10 pb-10'>
      {wordsEntered.map((word, index) => (
        <WordComplete key={index} word={selectedWord} input={word}/>
      ))}
      {gameStatus === GameStatus.Playing
        ? (
           <WordCurrent word={inputUser}/>
          )
        : null}
      {Array.from(Array(5 - turn)).map((_, index) => (
        <WordEmpty key={index}/>
      ))}
    </div>
    <Keyboard onKeyPressed={onKeyPressed}/>
    </>
  )
}
