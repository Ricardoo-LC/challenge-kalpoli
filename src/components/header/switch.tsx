import { useState, useEffect } from 'react'
import darkMode from '../../assets/header/switch-bg-dark.svg'
import lightMode from '../../assets/header/switch-bg-light.svg'
import dotLight from '../../assets/header/switch-btn-light.svg'
import dotDark from '../../assets/header/switch-btn-dark.svg'

const Switch = () => {
  const [theme, setTheme] = useState('light')
  const [isChecked, setIsChecked] = useState(false)

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
  //    <label className="relative inline-flex items-center cursor-pointer ml-1">
  //         <input type="checkbox" value="hola" className="sr-only peer" onClick={handleCheckboxChange}/>
  //         <div className="w-14 h-8 rounded-full relative">
  //             <div className="w-8 h-8 rounded-full absolute top-[-5%] transform [-translate-y-1/2] transition-transform peer-checked:after:content-[''] peer-checked:after:absolute peer-checked:after:top-1/2 peer-checked:after:-translate-y-1/2 peer-checked:after:left-[12px] peer-checked:after:w-5 peer-checked:after:h-5 peer-checked:after:border-gray-300 peer-checked:after:border peer-checked:after:rounded-full dark:border-gray-600 peer-checked:after:transform peer-checked:after:translate-x-5">
  //             {isChecked ? <img src={dotLight} alt="Logo" /> : <img src={dotDark} alt="Logo" />}
  //             </div>
  //             {isChecked ? <img src={lightMode} alt="Logo" /> : <img src={darkMode} alt="Logo" />}
  //         </div>
  //     </label>
    <label className="relative inline-flex items-center cursor-pointer ml-1">
        <input type="checkbox" value="hola" className="sr-only peer" onClick={handleCheckboxChange}/>
        <div className="w-14 h-8 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:left-[13px] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 ">
            {isChecked ? <img src={lightMode} alt="Logo" /> : <img src={darkMode} alt="Logo" />}
        </div>
    </label>
  )
}

export default Switch
