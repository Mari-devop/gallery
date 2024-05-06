import React from 'react'
import './PopupStyled'
import { PopupContainer } from './PopupStyled'
import imageList from '../../constants/imageList'

const Popup = ({ id, onClose }) => {

    const list = imageList.find((image) => image.id === id)

  return (
    <PopupContainer>
        <div>
            <button className='close' onClick={onClose}>Close</button>
        </div>
        <div className='popup'>
            <img src={list.image3} alt={list.title} />
        </div>
    </PopupContainer>
  )
}

export default Popup
