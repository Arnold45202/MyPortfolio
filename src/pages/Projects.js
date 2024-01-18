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
      </div>
    </div>
  );
}

export default Projects;
