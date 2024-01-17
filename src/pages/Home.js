/* Home.js */

import React from 'react';
import '../styleSheets/Home.css';

function Home() {
  return (
    <div className='home'>
      <div className='logo-container'>
        <img src="https://www.edigitalagency.com.au/wp-content/uploads/new-UNSW-logo-png-vertical-crest.png" className='logo' />
      </div>
      <div className='text-container'>
        <h1 className='title'>
          Passionate Software Engineering student @UNSW
        </h1>
        <p className='description'>
          Hey! I'm Jackson Wang 👋, always eager to learn, <br />a student looking for opportunities based in <br /> Sydney, Australia 📍
        </p>
      </div>
      <img src='https://media.licdn.com/dms/image/D5603AQEJdJ49ghLZtQ/profile-displayphoto-shrink_800_800/0/1699538162076?e=1710979200&v=beta&t=2RH2FEttozK23ZJqSK2m4aQkYVpB1r2l9MGzqr2ODcQ' alt='Thumbs Up' className='img' />
    </div>
  );
}

export default Home;
