import React, { useState } from 'react'
import List from './list/List'
import Search from './search/Search'
import axios from 'axios'

export default function Body() {
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])

  const handleChangeSearch = (event) => {
    setSearch(event.target.value)
  }

  const onSearchClick = (event) => {
    event.preventDefault()
    if (search !== '') {
      axios.get(`http://www.omdbapi.com/?apikey=c05a584e&s=${search}`)
        .then(response => setMovies(response.data.Search))
        .catch(error => console.log(error))
    } else {
      alert('Tolong isi Kolom search')
    }
  }

  return (
    <div className='mx-28'>
      <Search value={search} change={handleChangeSearch} onClick={onSearchClick} />
      <List movies={movies} />
      <div className='h-80'></div>
    </div>
  )
}

