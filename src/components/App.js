import React, { Component } from 'react';
import NavBar from './NavBar';
import Home from './Home';
import '../styles/NavBar.scss';

class App extends Component {
  render() {
    return (
      <div className="col-sm">
        <NavBar />
        <Home />
      </div>
    );
  }
}

export default App;
