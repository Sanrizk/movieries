import React, { useState, useRef, useEffect } from "react";
import Card from "./card/Card";

export default function List({ movies }) {

  const [currentPage, setCurrentPage] = useState(1)

  const itemPerPage = 3
  const firstIndex = (currentPage - 1) * itemPerPage
  const lastIndex = firstIndex + itemPerPage
  const dataMovies =  (movies !== undefined) && movies.slice(firstIndex, lastIndex)
  const totalPages = (movies !== undefined) && Math.ceil(movies.length / itemPerPage)
  const pages = [];

  const active = useRef(null)

  useEffect(() => {
    if(totalPages !== 0) {
      for (let i = 0; i < totalPages; i++) {
        active.current.children[i + 1].classList.remove('bg-blue-300')
        active.current.children[i + 1].classList.add('bg-blue-200')  
        active.current.children[i + 1].classList.remove('dark:bg-emerald-900')
        active.current.children[i + 1].classList.add('dark:bg-emerald-950')  
      }
      active.current.children[currentPage].classList.add('bg-blue-300')
      active.current.children[currentPage].classList.remove('bg-blue-200')
      active.current.children[currentPage].classList.add('dark:bg-emerald-900')
      active.current.children[currentPage].classList.remove('dark:bg-emerald-950')
    }
  }, [currentPage])

  for (let i = 0; i < totalPages; i++) {
    pages.push(<button className="mx-2 bg-blue-200 p-3 rounded-lg hover:bg-blue-300 font-bold dark:bg-emerald-950 dark:hover:bg-emerald-900" onClick={() => setCurrentPage(i + 1)} key={i}>{i + 1}</button>);
  }

  if(dataMovies.length) {
    return(
      <>
        {
          dataMovies.map((item, index) => (
            <Card 
              key={index}
              imageSrc={item.Poster}
              title={item.Title}
              year={item.Year}
              type={item.Type}  
            />
          ))
        }
        <div ref={active} className="buttons mx-auto w-max mt-28">
          <button className="mx-2 bg-blue-200 p-3 rounded-lg hover:bg-blue-300 font-bold dark:bg-emerald-950 dark:hover:bg-emerald-900" onClick={() => (currentPage !== 1) && setCurrentPage(currentPage - 1)}>prev</button>
          {pages}
          <button className="mx-2 bg-blue-200 p-3 rounded-lg hover:bg-blue-300 font-bold dark:bg-emerald-950 dark:hover:bg-emerald-900" onClick={() => (currentPage !== totalPages) && setCurrentPage(currentPage + 1)}>Next</button>
        </div>
      </>
    )
  } else {
    return (
      <h3 className='mx-auto w-max text-3xl font-bold'>No Data Film</h3>
    )
  }
}
