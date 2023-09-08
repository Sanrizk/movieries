import React, { useEffect, useState, useRef } from 'react'
import List from './list/List'
import Search from './search/Search'
import axios from 'axios'
import Modal from './modal/Modal'

export default function Body() {
  const [changeSearch, setChangeSearch] = useState('')
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])
  const [isModalOpen, setModalOpen] = useState(false)
  const [modalAnimate, setModalAnimate] = useState('')
  const [backOpacity, setBackOpacity] = useState('')
  const [idMovie, setIdMovie] = useState('')
  const [movie, setMovie] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const handleChangeSearch = (event) => {
    setChangeSearch(event.target.value)
  }

  const onSearchClick = (event) => {
    event.preventDefault()
    setSearch(changeSearch)
  }

  useEffect(() => {
    if (search !== '') {
      axios.get(`http://www.omdbapi.com/?apikey=c05a584e&s=${search}`)
        .then(response => setMovies(response.data.Search))
        .catch(error => console.log(error))
    }
  }, [search])

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?apikey=c05a584e&i=${idMovie}`)
    .then(response => {
      setMovie(response.data)
    }).catch(error => console.log(error))
  }, [idMovie])

  useEffect(() => setIsLoading((movie.Response === 'False' || movie.Response === undefined) && true), [movie])
  useEffect(() => setIsLoading(true), [])

  const onClickModal = (paramId) => {
    if (isModalOpen === false) {
      // gonna open modal
      setModalOpen(!isModalOpen)
      setModalAnimate('translate-y-[-1000px]')
      setBackOpacity('bg-black bg-opacity-50')
      setTimeout(() => setModalAnimate(''), 10)
      setIdMovie(paramId)
    } else if (isModalOpen === true) {
      // gonna close modal
      (isModalOpen === true) && setTimeout(() => setModalOpen(!isModalOpen), 200)
      setModalAnimate('')
      setBackOpacity('bg-opacity-100')
      setTimeout(() => setModalAnimate('translate-y-[-1000px]'), 10)
      setTimeout(() => setIsLoading(true), 200)
    }
  }

  return (
    <div className='mx-28'>
      {
        (isModalOpen) && (<Modal movie={movie} onClickModal={onClickModal} modalAnimate={modalAnimate} backOpacity={backOpacity} isLoading={isLoading} />)
      }
      <Search value={changeSearch} change={handleChangeSearch} onClick={onSearchClick} />
      <List movies={movies} onClickModal={onClickModal} />
      <div className='h-80'></div>
    </div>
  )

}

