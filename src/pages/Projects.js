// Projects.js
import React, { useEffect } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styleSheets/Projects.css';

function Projects() {
  useEffect(() => {
    document.title = 'Projects';
    const favicon = document.querySelector('link[rel="icon"]');
    favicon.href = 'https://cdn.discordapp.com/attachments/890136733923033119/1199279834975698974/favicon-16x16.png?ex=65c1f762&is=65af8262&hm=69191c4021ac44970c1e4f05cfa7eedcf64091d3346ddef0bff0295a08493ef2&';
  }, []);

  return (
    <div>
      <div className="project-container">
        <h1 className='title3'>My Projects!</h1>
        <p>Every employer is just looking for someone that's good and <br></br>I am good so here is my projects to show my independent learning.</p>
        <div className="project-box">
          <a href="https://arnold45202.github.io/MyPortfolio/" target="_blank" rel="noopener noreferrer" className='Project-title'><img className='gamePicture' src="data:image/png;base64,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" alt="Project Image" /></a>
          <div className="project-details">
            <h2 className="project-title"><a href="https://arnold45202.github.io/MyPortfolio/" target="_blank" rel="noopener noreferrer" className='Project-title'>RISKIT (In the making)</a></h2>
            <h2 className='second-title'>Tech Stack: react, typescript, Firebase and more!</h2>
            <p>Collabed with 2 other students and we created a virtual gambling website where it has a user authentication system, and gambling games with virtual money such as minesweeper and more</p>
            <a href="https://github.com/Yangstaboi/RISKIT" target="_blank" rel="noopener noreferrer" className='github-logo'>
              <GitHubIcon />
            </a>
          </div>
        </div>
        <div className="project-box">
          <a href="https://whatstheweatherrightnow.netlify.app/" target="_blank" rel="noopener noreferrer" className='Project-title'><img className='gamePicture' src="https://cdn.discordapp.com/attachments/949224467127746610/1197826587136098304/image.png?ex=65bcadf0&is=65aa38f0&hm=9c9fef2246c5b34ccfd8d1397eb4c8c4fd48a51a330334f82f2dabe86c2493b7&&" alt="Project Image" /></a>
          <div className="project-details">
            <h2 className="project-title"><a href="https://whatstheweatherrightnow.netlify.app/" target="_blank" rel="noopener noreferrer" className='Project-title'>Weather website</a></h2>
            <h2 className='second-title'>Tech Stack: react, typescript, material UI, weatherOpenMap Api</h2>
            <p>Created a weather App where I get to learn how to take in real time data from an API online to build a website, This website would check the weather of your location also the temparature etc, the emoji would change based on the given variables. </p>
            <a href="https://github.com/Arnold45202/weatherApi" target="_blank" rel="noopener noreferrer" className='github-logo'>
              <GitHubIcon />
            </a>
          </div>
        </div>
        <div className="project-box">
          <a href="https://arcadegamedown.000webhostapp.com/index.html" target="_blank" rel="noopener noreferrer" className='Project-title'><img className='gamePicture' src="https://cdn.discordapp.com/attachments/949224467127746610/1197335073003941949/GameRush_title_logo.png?ex=65bae42e&is=65a86f2e&hm=92d486c73b8be3cccc9ea20c05043665b71953d74f6802c4f1bb7611f0661eb7&" alt="Project Image" /></a>
          <div className="project-details">
            <h2 className="project-title"><a href="https://arcadegamedown.000webhostapp.com/index.html" target="_blank" rel="noopener noreferrer" className='Project-title'>Game Rush (more games in production)</a></h2>
            <h2 className='second-title'>Tech Stack: HTML/CSS, Python, Javascript and pyscript</h2>
            <p>This is a game website where I got to learn how to make a game website, where it has like the childhood games such as like tic tac toe etc, By doing this I learnt how to code using html/css and python.</p>
            <a href="https://github.com/Arnold45202/Games" target="_blank" rel="noopener noreferrer" className='github-logo'>
              <GitHubIcon />
            </a>
          </div>
        </div>
        <div className="project-box">
          <a href="https://arnold45202.github.io/MyPortfolio/" target="_blank" rel="noopener noreferrer" className='Project-title'><img className='gamePicture' src="https://cdn.discordapp.com/attachments/890136733923033119/1197493881214865428/image.png?ex=65bb7815&is=65a90315&hm=44eae855a06510fcc8d9b635faea50d194ce5ae190d0bb393300b4db380f28e8&" alt="Project Image" /></a>
          <div className="project-details">
            <h2 className="project-title"><a href="https://arnold45202.github.io/MyPortfolio/" target="_blank" rel="noopener noreferrer" className='Project-title'>My Portfolio</a></h2>
            <h2 className='second-title'>Tech Stack: Javascript, React, CSS and web3form</h2>
            <p>This portfolio was created for me to farmlise with React and to showcase my skills, projects, and a bit about myself.</p>
            <a href="https://github.com/Arnold45202/MyPortfolio" target="_blank" rel="noopener noreferrer" className='github-logo'>
              <GitHubIcon />
            </a>
          </div>
        </div>
        <div className="project-box">
          <a href="https://kandjtakeaway.netlify.app" target="_blank" rel="noopener noreferrer" className='Project-title'><img className='gamePicture' src="https://cdn.discordapp.com/attachments/949224467127746610/1197751140369047632/image.png?ex=65bc67ad&is=65a9f2ad&hm=fe5cbe7b921cb415c216ab2940e20905b74fb36afedf0a381d0eba017ab63109&" alt="Project Image" /></a>
          <div className="project-details">
            <h2 className="project-title"><a href="https://kandjtakeaway.netlify.app" target="_blank" rel="noopener noreferrer" className='Project-title'>K and J takeaway</a></h2>
            <h2 className='second-title'>Tech Stack: HTML/CSS</h2>
            <p>This website was made in order to allow customers to serach up the website and look at the pricing of the food easier</p>
            <a href="https://github.com/Arnold45202/K-and-J-takeaway-website" target="_blank" rel="noopener noreferrer" className='github-logo'>
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
