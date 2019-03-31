import React, { Component } from 'react';
import '../styles/App.css';

class NavBar extends Component {

  scroll = (e) => {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container">
        <div className="navLeft"> 
          <h2 onClick={this.scroll}>Anan</h2>
        </div>
        <div className="navRight"> 
          <h2 className="navItem" onClick={this.scroll}>About</h2>
          <h2 className="navItem" onClick={this.scroll}>Projects</h2>
          <h2 className="navItem" onClick={this.scroll}>Contact</h2>
        </div>
      </div>
    );
  }
}

export default NavBar;
