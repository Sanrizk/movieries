import React from "react";
import { useState, useEffect } from "react"
import axios from 'axios'
import Card from "./card/Card";

export default function List() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get('http://www.omdbapi.com/?apikey=c05a584e&s=the walking dead')
    .then(response => setMovies(response.data.Search))
    .catch(error => console.log(error))
  }, [])

  // const dataOmdb = () => {
  //   fetch("http://www.omdbapi.com/?apikey=c05a584e&s=the walking dead", {
  //     method: "GET",
  //   }).then((response) => response.json())
  //   .then((data) => {
  //     return data
  //   })  
  // }

  console.log(movies)
  // let data = fetch("http://www.omdbapi.com/?apikey=c05a584e&s=the walking dead", {
  //   method: "GET",
  // }).then((response) => response.json())
  // .then((data) => {
  //   console.log(data)
  // })


  return(
    <>      
      {
        movies.map((item, index) => (
          <Card 
            key={index}
            imageSrc={item.Poster}
            title={item.Title}
            description={item.Year}
            otherInfo={[`Info 1: ${item.Type}", "Info 2: Nilai 2`]}  
          />
        ))
      }
    </>
  )
}
