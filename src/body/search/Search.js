import React from 'react'

export default function Search() {
  return(
    <>
      <div className='mt-[-35px] w-full mb-32'>
        <div className='border-4 rounded-full border-blue-400 focus:border-red-400 w-1/2 mx-auto bg-lime-50 flex justify-between overflow-hidden'>
          <input type="text" className='focus:outline-none rounded-3xl h-20 w-5/6 bg-transparent px-7 text-xl font-semibold'/>
          <button className='ms-10 border-s-4 border-blue-400 hover:bg-blue-200 px-5 ease-in duration-100 font-bold text-lg'>Search</button>
        </div>
      </div>
    </>
  )
}