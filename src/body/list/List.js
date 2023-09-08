import React, { useState, useRef, useEffect } from "react";
import Card from "./card/Card";
import './List.css'

export default function List({ movies, onClickModal }) {

  const [currentPage, setCurrentPage] = useState(1)

  const itemPerPage = 3
  const firstIndex = (currentPage - 1) * itemPerPage
  const lastIndex = firstIndex + itemPerPage
  const dataMovies = (movies !== undefined) && movies.slice(firstIndex, lastIndex)
  const totalPages = (movies !== undefined) && Math.ceil(movies.length / itemPerPage)
  const pages = [];

  const active = useRef(null)

  useEffect(() => {
    if (totalPages !== 0) {
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
    pages.push(
      // <button className='button-pagination bg-blue-200 dark:bg-emerald-950' onClick={() => setCurrentPage(i + 1)} key={i}>
      <button className={(i === 0) ? 'button-pagination bg-blue-300 dark:bg-emerald-900' : 'button-pagination bg-blue-200 dark:bg-emerald-950' } onClick={() => setCurrentPage(i + 1)} key={i}>
        {i + 1}
      </button>
    )
  }

  if (dataMovies.length) {
    return (
      <>
        {
          dataMovies.map((item, index) => (
            <Card
              key={index}
              dataId={item.imdbID}
              imageSrc={item.Poster}
              title={item.Title}
              year={item.Year}
              type={item.Type}
              onClickModal={onClickModal}
            />
          ))
        }
        <div ref={active} className="container-pagination">
          <button className="button-prevnext" onClick={() => (currentPage !== 1) && setCurrentPage(currentPage - 1)}>prev</button>
          {pages}
          <button className="button-prevnext" onClick={() => (currentPage !== totalPages) && setCurrentPage(currentPage + 1)}>Next</button>
        </div>
      </>
    )
  } else {
    return (
      <h3 className='mx-auto w-max text-3xl font-bold'>No Data Film</h3>
    )
  }
}
