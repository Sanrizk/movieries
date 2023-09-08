import React from 'react'
import './HeaderModal.css'

export default function HeaderModal({ title }) {
  return(
    <div className="header-modal">
      <h3 className='title__header-modal'>{title}</h3>
    </div>
  )
}