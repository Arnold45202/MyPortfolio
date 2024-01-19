// Projects.js
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styleSheets/Projects.css';

function Projects() {
  return (
    <div>
      <div className="project-container">
        <h1 className='title3'>My Projects!</h1>
        <p>Check out my projects I did thorughout the summer and my term breaks</p>
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
      </div>
    </div>
  );
}

export default Projects;
