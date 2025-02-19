import { useEffect, useState } from 'react'
import LightBtn from '../assets/Images/light-mode-button.png'
import DarkBtn from '../assets/Images/dark-mode-button.png'

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")

  const element = document.documentElement;

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if(theme === "dark") {
        element.classList.add("dark");
        element.classList.add("dark");
    } else {
        element.classList.remove("light");
        element.classList.remove("dark");
    }
  })
  return (
    <div className='relative'>
        <img onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} src={LightBtn} alt="Click for dark mode" className={`w-12 absolute right-0 z-10 transition-all duration-300 cursor-pointer ${theme === "dark" ? "opacity-0" : "opacity-100"}`}/>

        <img onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} src={DarkBtn} alt="Click for light mode" className={`w-12 cursor-pointer`}/>
    </div>
  )
}

export default DarkMode