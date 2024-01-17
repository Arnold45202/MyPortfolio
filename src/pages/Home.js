/* Home.js */

import React from 'react';
import '../styleSheets/Home.css';

function Home() {
  return (
    <div className='home'>
      <div className='logo-container'>
        <img src='/images/UnswLogo.png' className='logo' />
      </div>
      <div className='text-container'>
        <h1 className='title'>
          Passionate Software Engineering student @UNSW
        </h1>
        <p className='description'>
          Hey! I'm Jackson Wang, always eager to learn, <br />A student looking for opportunities based in <br /> Sydney, Australia 📍
        </p>
      </div>
      <img src='/images/thumbsup.jpg' alt='Thumbs Up' className='img' />
    </div>
  );
}

export default Home;
