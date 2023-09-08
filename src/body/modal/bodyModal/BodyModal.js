import React from 'react'
import './BodyModal.css'

export default function BodyModal({ movie }) {
  return (
    <div className="body-modal">
      <div className="col-first">
        <div className='w-4/12'>
          <img alt='' src={movie.Poster} />
        </div>
        <div className="w-7/12">
          <p>{movie.imdbRating} / 10</p>
          <p>Genre : {movie.Genre}</p>
          <p>Type : {movie.Type}</p>
          <p>Released : {movie.Released}</p>
          <p>Director : {movie.Director}</p>
          <p>Writer : {movie.Writer}</p>
          <p>Country : {movie.Country}</p>
          {(movie.Type === 'series') && (<p>{`Total Seasons : ${movie.totalSeasons}`}</p>)}
          <p>Awards : {movie.Awards}</p>
          <p>Actors : {movie.Actors}</p>
        </div>
      </div>
      <div className="col-sec">
        <p>{movie.Plot}</p>
      </div>
    </div>
  )  
}