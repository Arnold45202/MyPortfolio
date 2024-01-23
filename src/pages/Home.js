import React, { useEffect } from 'react';
import '../styleSheets/Home.css';
import favicon from '../assets/favicon-16x16.png';

function Home() {
  useEffect(() => {
    document.title = 'Home';
    const favicon = document.querySelector('link[rel="icon"]');
    favicon.href = 'https://cdn.discordapp.com/attachments/890136733923033119/1199279834975698974/favicon-16x16.png?ex=65c1f762&is=65af8262&hm=69191c4021ac44970c1e4f05cfa7eedcf64091d3346ddef0bff0295a08493ef2&';
  }, []);

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
