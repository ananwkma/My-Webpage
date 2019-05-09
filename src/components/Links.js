import React, { Component } from 'react';
import '../styles/Links.scss';
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin';
import IosMail from 'react-ionicons/lib/IosMail';
import IosGameControllerB from 'react-ionicons/lib/IosGameControllerB';

class Links extends Component {

  render() {
    return (
      <div className="ContactContainer">
        <a href="https://github.com/ananwkma"> 
          <LogoGithub className="FooterLink"/> 
        </a>
        <a href="https://www.linkedin.com/in/ananwma/"> 
          <LogoLinkedin className="FooterLink" fontSize="60px"/> 
        </a>
        <a href="http://www.google.com"> 
          <IosMail className="FooterLink" fontSize="60px"/> 
        </a>
        <a href="http://www.google.com"> 
          <IosGameControllerB className="FooterLink" fontSize="60px"/> 
        </a>
      </div>
    );
  }
}

export default Links;
