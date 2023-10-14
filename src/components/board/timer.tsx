import { useState, useEffect } from 'react'

interface TimerProps {
  setNewGame: () => void;
}
const CountdownTimer = ({ setNewGame }: TimerProps) => {
  const initialDuration = 5 * 60
  const [duration, setDuration] = useState(initialDuration)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (duration > 0) {
        setDuration(duration - 1)
      } else {
        setDuration(initialDuration)
        setNewGame()
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [duration, initialDuration])

  const minutes = Math.floor(duration / 60)
  const seconds = duration % 60

  const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`
  const secondsString = seconds < 10 ? `0${seconds}` : `${seconds}`

  return (
    <span>
        {minutesString}:{secondsString}
    </span>
  )
}

export default CountdownTimer
