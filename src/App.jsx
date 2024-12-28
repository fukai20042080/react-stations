import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Dogアプリ</h1>
    </header>
  );
};

export default Header;
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
import React, { useState } from 'react';
import DogImage from './DogImage';
import './Description.css';

const Description = () => {
  const [dogUrl, setDogUrl] = useState('https://place.dog/500/500');

  const updateDogImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setDogUrl(data.message);
      })
      .catch(error => {
        console.error('犬の画像を取得できませんでした:', error);
      });
  };

  return (
    <div className="description">
      <h2 className="subheading">Hello, world!</h2>
      <p className="description-text">犬の画像を表示するサイトです。</p>
      <DogImage imageUrl={dogUrl} />
      <button className="update-button" onClick={updateDogImage}>更新</button>
    </div>
  );
};

export default Description;





