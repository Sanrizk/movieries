import React from 'react'
import './Card.css'

export default function Card({ dataId, imageSrc, title, year, type, onClickModal }) {
  return(
    <div className="container-card">

      {/* Bagian kiri dengan gambar */}
      <div className="container-image">
        <img src={imageSrc} alt={title} className="image" />
      </div>
      
      {/* Bagian kanan dengan teks */}
      <div className="container-desk">
        <button className="title-desk" onClick={onClickModal.bind(this, dataId)}>{title}</button>
        <p className="desk-year">{year}</p>
        {/* Informasi lain-lain */}
        <div className="text-lg">
          Type: {type}
        </div>
      </div>

    </div>

  )
}


