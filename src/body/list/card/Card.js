import React from 'react'
import './Card.css'

export default function Card({ imageSrc, title, year, type }) {
  return(
    <div className="container-card">

      {/* Bagian kiri dengan gambar */}
      <div className="container-image">
        <img src={imageSrc} alt={title} className="image" />
      </div>
      
      {/* Bagian kanan dengan teks */}
      <div className="container-desk">
        <h2 className="title-desk">{title}</h2>
        <p className="desk-year">{year}</p>
        {/* Informasi lain-lain */}
        <div className="text-lg">
          Type: {type}
        </div>
      </div>

    </div>

  )
}


