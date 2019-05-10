import React, { Component } from 'react';
import NavBar from './NavBar';
import Home from './Home';
import '../styles/NavBar.scss';
import { throttle } from 'lodash';

class App extends Component {
  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  handleOnResize() {
    console.log('somehow optimize resize');
  }

  onResize = throttle(this.handleOnResize, 200, { trailing: true });
  
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
