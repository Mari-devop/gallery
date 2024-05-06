import React from 'react';
import './HomeStyled';
import { GalleryComponent } from './HomeStyled';
import imageList from '../../constants/imageList';

const Home = () => {
  return (
    <div className='home-container container'>
      <GalleryComponent>
        {imageList.map(image => (
          <div
            className={`item h${image.span.columns || 1} v${image.span.rows || 1}`}
            key={image.id}
            style={{
              gridColumn: `span ${image.span.columns || 1}`,
              gridRow: `span ${image.span.rows || 1}`
            }}
          >
            <img src={image.image} alt={image.title} />
            <div className='item-overlay'>
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </GalleryComponent>
    </div>
  );
};

export default Home;
