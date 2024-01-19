import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styleSheets/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div>
        <a href="https://www.linkedin.com/in/jackson-wang-75357129a/" target="_blank" rel="noopener noreferrer" className='linkdln-logo'>
          <LinkedInIcon />
        </a>
        <a href="https://github.com/Arnold45202" target="_blank" rel="noopener noreferrer" className='github-logo'>
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
}

export default Footer;