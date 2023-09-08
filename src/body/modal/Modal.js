import React from 'react'
import BodyModal from './bodyModal/BodyModal'
import FooterModal from './footerModal/FooterModal'
import HeaderModal from './headerModal/HeaderModal'
import './Modal.css'


export default function Modal({ movie, onClickModal, modalAnimate, backOpacity, isLoading }) {
  return (
    <div className={`fixed border-0 inset-0 z-10 flex justify-center items-center backdrop-blur-sm ${backOpacity} `} style={{ transition: "all 0.2s ease" }}>
      <div className={`bg-blue-100 dark:bg-emerald-900 w-1/2 rounded-lg ${modalAnimate} `} style={{ transition: "all 0.2s ease" }}>
        <HeaderModal title={(isLoading) ? 'Loading....' : movie.Title}/>
        <hr className='divide-modal' />
        {
          (isLoading) 
          ?
          (<div className="flex justify-center items-center h-96">
            <svg className="animate-spin h-20 w-20 mr-3 bg-transparent rounded-full border-8 border-slate-600 dark:border-stone-300 border-l-transparent" viewBox="0 0 24 24"></svg>
          </div>)
          :
          <BodyModal movie={movie} />
        }
        <hr className='divide-modal' />
        <FooterModal onClickModal={onClickModal} />
      </div>
    </div>
  )
}