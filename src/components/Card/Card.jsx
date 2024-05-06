import React, { useState } from 'react'
import './CardStyled'
import { CardContainer } from './CardStyled'
import { Link } from 'react-router-dom'
import imageList from '../../constants/imageList'
import Footer from '../Footer/Footer'
import Popup from '../Popup/Popup'

const Card = ( {id} ) => {

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = (id) => {
    setShowPopup(!showPopup);
  }

  const list = imageList.find((image) => image.id === id)
  if (!list) {
      return <div>No data found for this ID</div>;
    }
  return (
    <div>
      <CardContainer>
        <div className='card-container container'>
          <div className='card-image'>
            <div className='card-title'>
              <h2>{list.title}</h2>
              <p>{list.description}</p>
            </div>
            <img src={list.image2} alt={list.title} onClick={() => togglePopup(list.id)} />
            <img src={list.artist} className="artist" alt={list.title} />
          </div>
        
          <div className='card-text'>
            <span>{list.year}</span>
            <p>{list.descrip}</p>
            <Link  to="/">Go to gallery</Link>
          </div>
        </div>  
      </CardContainer>
    <Footer id={id} />
    {showPopup && <Popup id={id} onClose={() => setShowPopup(false)} />}
    </div>
  )
}

export default Card
