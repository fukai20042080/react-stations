import React from 'react';
import './DogImage.css';

const DogImage = ({ imageUrl }) => {
  return (
    <img 
      src={imageUrl} 
      alt="犬の画像" 
      className="dog-image"
    />
  );
};

export default DogImage;
