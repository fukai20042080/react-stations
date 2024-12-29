import React, { useState } from 'react';
import './App.css';

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
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
    <div>
      <header className="header">
        <h1 className="header-title">Dogアプリ</h1>
      </header>
      <h2 className="subheading">Hello, world!</h2>
      <p className="description">犬の画像を表示するサイトです。</p>
      {/* dogUrlをsrc属性に設定して画像を表示 */}
      <img 
        src={dogUrl} 
        alt="犬の画像" 
        className="dog-image"
      />
      {/* ボタンをクリックするとランダムな画像URLを取得して表示 */}
      <button className="update-button" onClick={updateDogImage}>更新</button>
    </div>
  );
};
