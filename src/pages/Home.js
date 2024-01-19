import React, { useEffect } from 'react';
import '../styleSheets/Home.css';

function Home() {
  useEffect(() => {
    document.title = 'Home';
    const favicon = document.querySelector('link[rel="icon"]');
    favicon.href = 'https://cdn.discordapp.com/attachments/890136733923033119/1197080281547546685/A77CC146-1A5D-4DFB-B7A1-9608FFBC9695-545-000001136FE557B9.jpg?ex=65b9f6e3&is=65a781e3&hm=b12239264d9daad06682a537425929477602b9386a8aa88fe864fb9bd299e149&';
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
