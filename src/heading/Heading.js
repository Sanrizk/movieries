import React, { useRef, useState } from 'react'
import './Heading.css'

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
      <div className='heading'>
        <div className='title'>Movieries.tv</div>
        <div className='button-icon'>
          <button onClick={onClickMode}><i ref={buttonDarkMode} className="fa-solid fa-sun"></i></button>        
        </div>
      </div>
    </>
  )
}

export default Heading