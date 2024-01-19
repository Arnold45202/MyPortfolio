// Projects.js
import React, { useEffect } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styleSheets/Projects.css';

function Projects() {
  useEffect(() => {
    document.title = 'Projects';
  }, []);

  return (
    <div>
      <div className="project-container">
        <h1 className='title3'>My Projects!</h1>
        <p>Check out my projects I did thorughout the summer and my term breaks</p>
        <div className="project-box">
          <a href="https://arnold45202.github.io/MyPortfolio/" target="_blank" rel="noopener noreferrer" className='Project-title'><img className='gamePicture' src="https://cdn.discordapp.com/attachments/949224467127746610/1197752350429958215/IMG_0128.jpg?ex=65bc68cd&is=65a9f3cd&hm=cced1e50c3dd29b06d5aa229c71514113843d731f864f580405eec16fae2dbf0&" alt="Project Image" /></a>
          <div className="project-details">
            <h2 className="project-title"><a href="https://arnold45202.github.io/MyPortfolio/" target="_blank" rel="noopener noreferrer" className='Project-title'>weatherAPI (In the making)</a></h2>
            <h2 className='second-title'>Tech Stack: react, typescript, material UI, weatherOpenMap Api</h2>
            <p>Creating a weatherAPI where it would check the temparature and stuff and possible adding forecasting on the website</p>
            <a href="https://github.com/Arnold45202/weatherApi" target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </a>
          </div>
        </div>
        <div className="project-box">
          <a href="https://arcadegamedown.000webhostapp.com/index.html" target="_blank" rel="noopener noreferrer" className='Project-title'><img className='gamePicture' src="https://cdn.discordapp.com/attachments/949224467127746610/1197335073003941949/GameRush_title_logo.png?ex=65bae42e&is=65a86f2e&hm=92d486c73b8be3cccc9ea20c05043665b71953d74f6802c4f1bb7611f0661eb7&" alt="Project Image" /></a>
          <div className="project-details">
            <h2 className="project-title"><a href="https://arcadegamedown.000webhostapp.com/index.html" target="_blank" rel="noopener noreferrer" className='Project-title'>Game Rush</a></h2>
            <h2 className='second-title'>Tech Stack: HTML/CSS, Python, Javascript and pyscript</h2>
            <p>This is a game website where I got to learn how to make a game website, where it has like the childhood games such as like tic tac toe etc, By doing this I learnt how to code using html/css and python.</p>
            <a href="https://github.com/Arnold45202/Games" target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </a>
          </div>
        </div>
        <div className="project-box">
          <a href="https://arnold45202.github.io/MyPortfolio/" target="_blank" rel="noopener noreferrer" className='Project-title'><img className='gamePicture' src="https://cdn.discordapp.com/attachments/890136733923033119/1197493881214865428/image.png?ex=65bb7815&is=65a90315&hm=44eae855a06510fcc8d9b635faea50d194ce5ae190d0bb393300b4db380f28e8&" alt="Project Image" /></a>
          <div className="project-details">
            <h2 className="project-title"><a href="https://arnold45202.github.io/MyPortfolio/" target="_blank" rel="noopener noreferrer" className='Project-title'>My Portfolio</a></h2>
            <h2 className='second-title'>Tech Stack: React.js, CSS and web3form</h2>
            <p>This portfolio was created for me to farmlise with React and to showcase my skills, projects, and a bit about myself.</p>
            <a href="https://github.com/Arnold45202/MyPortfolio" target="_blank" rel="noopener noreferrer" className='bottom'>
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
            <a href="https://github.com/Arnold45202/K-and-J-takeaway-website" target="_blank" rel="noopener noreferrer" className='bottom'>
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
