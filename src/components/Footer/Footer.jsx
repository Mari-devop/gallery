import React from 'react';
import './FooterStyled';
import { FooterContainer } from './FooterStyled';
import imageList from '../../constants/imageList';


const Footer = ({ id }) => {
  const imageData = imageList.find((image) => image.id === id);

  if (!imageData) {
    return null; 
  }

  return (
    <FooterContainer>
      <div className="footer-container">
        <h4>{imageData.title}</h4>
        <p>{imageData.description}</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
