import React from 'react'
import './FooterModal.css'

export default function FooterModal({ onClickModal }) {
  return (
    <div className="footer-modal">
      <button className='btn-close__footer-modal' onClick={onClickModal}>Close</button>
    </div>

  )
}