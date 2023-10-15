import { useState, useEffect } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import darkMode from '../../assets/header/switch-bg-dark.svg'
import lightMode from '../../assets/header/switch-bg-light.svg'

const Switch = () => {
  const [theme, setTheme] = useLocalStorage('themeGameKalpoli', 'light')
  const [isChecked, setIsChecked] = useState(theme === 'light')

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html')?.classList.add('dark')
    } else {
      document.querySelector('html')?.classList.remove('dark')
    }
  }, [theme])

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
    setTheme(!isChecked ? 'light' : 'dark')
  }

  return (
    <label htmlFor="toggleB" className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          id="toggleB"
          className="sr-only"
          checked={!!isChecked}
          onClick={handleCheckboxChange}
        />
        <div className="block  w-14 h-8 rounded-full">
          {isChecked
            ? (
            <img src={lightMode} alt="bg-light-mode" />
              )
            : (
            <img src={darkMode} alt="bg-dark-mode" />
              )}
        </div>
        <div className="dot absolute left-1 top-[3px] w-6 h-6 rounded-full transition"></div>
      </div>
    </label>
  )
}

export default Switch
