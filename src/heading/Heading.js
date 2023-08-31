import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom/client'

function Heading() {
  const [darkMode, setDarkMode] = useState(false)
  const buttonDarkMode = useRef(null)

  const onClickMode = () => {
    (darkMode) ? setDarkMode(!darkMode) : setDarkMode(!darkMode)
    document.documentElement.classList.add((darkMode) ? 'dark' : 'light')
    document.documentElement.classList.remove((darkMode) ? 'light' : 'dark')
    buttonDarkMode.current.classList.add((darkMode) ? 'fa-moon' : 'fa-sun')
    buttonDarkMode.current.classList.remove((darkMode) ? 'fa-sun' : 'fa-moon')
  }

  return (
    <>
      <div className='bg-blue-200 w-full h-32 flex justify-evenly dark:bg-emerald-950'>
        <div className='pt-10 w-2/3 py-6 text-4xl font-bold'>Movieries.tv</div>
        <div className='pt-10 text-2xl'>
          <button onClick={onClickMode}><i ref={buttonDarkMode} className="fa-solid fa-sun"></i></button>        
        </div>
      </div>
    </>
  )
}

export default Heading