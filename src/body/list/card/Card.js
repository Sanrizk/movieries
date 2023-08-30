import React from 'react'

export default function Card({ imageSrc, title, description, otherInfo }) {
  return(
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex mx-48 my-10 dark:drop-shadow-[0_35px_35px_rgba(255,255,255,0.25)] dark:bg-stone-600">

      {/* Bagian kiri dengan gambar */}
      <div className="w-1/3">
        <img src={imageSrc} alt={title} className="w-full h-auto" />
      </div>
      
      {/* Bagian kanan dengan teks */}
      <div className="w-2/3 p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="mb-4">{description}</p>
        {/* Informasi lain-lain */}
        <div className="text-sm">
          {otherInfo.map((info, index) => (
            <div key={index} className="mb-1">
              {info}
            </div>
          ))}
        </div>
      </div>

    </div>

  )
}


