import React, { Component } from 'react';
import '../styles/NavBar.scss';
import { goToAnchor } from 'react-scrollable-anchor'

class NavBar extends Component {

  scroll = (e) => {
    window.scrollTo(0, 0);
  }

  handleClick = (e) => {
    e.preventDefault();
    let path = e.target.id;
    goToAnchor(path);
  }

  render() {
    return (
      <div className="container">
        <div className="navLeft"> 
          <h2 className="HomeButton" onClick={this.scroll}>Anan Ma</h2>
        </div>

        <div className="navRight"> 
          <h2 className="navItem" onClick={this.handleClick} id="ABOUT">About</h2>
          <h2 className="navItem" onClick={this.handleClick} id="PROJECTS">Projects</h2>
          <h2 className="navItem" onClick={this.handleClick} id="LINKS">Links</h2>
        </div>

      </div>
    );
  }
}

export default NavBar;
