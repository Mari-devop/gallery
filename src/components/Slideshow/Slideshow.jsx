import React, { useState} from 'react';
import Card from '../Card/Card';
import './SlideshowStyled';
import { SlideshowBtn } from './SlideshowStyled';
import imageList from '../../constants/imageList';
import leftArrow from '../../assets/Group 5 Copy.svg';
import rightArrow from '../../assets/Group 5.svg';

const Slideshow = () => {
  const [currentId, setCurrentId] = useState(1);
 
  const handleNext = () => {
    const nextId = currentId === imageList.length ? 1 : currentId + 1;
    setCurrentId(nextId);
  }

  const handlePrev = () => {
    const prevId = currentId === 1 ? imageList.length : currentId - 1;
    setCurrentId(prevId);
  }

  return (
    <div>
      <Card id={currentId} />
      <SlideshowBtn>
        <button onClick={handlePrev}><img src={leftArrow} alt='left arrow' /></button>
        <button onClick={handleNext}><img src={rightArrow} alt='right arrow' /></button>
      </SlideshowBtn>
    </div>
  );
};

export default Slideshow;
