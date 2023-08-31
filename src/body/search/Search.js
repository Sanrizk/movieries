import React from 'react'
import './Search.css'

export default function Search({ value, change, onClick }) {
  return (
    <>
      <div className='search'>
        <form>
          <div className='container-search'>
            <input type="text" className='input-search' value={value} onChange={change} />
            <button type="submit" className='button-search' onClick={onClick}>Search</button>
          </div>
        </form>
      </div>
    </>
  )
}