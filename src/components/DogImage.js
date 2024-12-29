// DogImage.js
import React from 'react';

const DogImage = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt="犬の画像" style={{ maxWidth: '100%' }} />
    </div>
  );
};

export default DogImage;

