import React, { Component } from 'react';
import '../styles/Contact.scss';
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin';
import IosMail from 'react-ionicons/lib/IosMail';

class Contact extends Component {
  render() {
    return (
      <div className="ContactContainer">

        <a href="https://github.com/ananwkma"> <LogoGithub fontSize="60px"/> </a>
        <a href="https://www.linkedin.com/in/ananwma/"> <LogoLinkedin fontSize="60px"/> </a>
        <a href="http://www.google.com"> <IosMail fontSize="60px"/> </a>
      </div>
    );
  }
}

export default Contact;
