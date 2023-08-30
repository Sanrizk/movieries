import React from "react";
import Card from "./card/Card";

export default function List({ movies }) {

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
