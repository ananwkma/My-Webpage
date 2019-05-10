import React, { Component } from 'react';
import Projects from './Projects';
import About from './About';
import Links from './Links';
import Rankings from './Rankings';
import '../styles/Home.scss';

import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
 
configureAnchors({offset: -150, scrollDuration: 200})
// configureAnchors({offset: -80, scrollDuration: 200})

class Home extends Component {
  render() {
    return (
      <div className="contentContainer">
        <div className="row">
          <div className="col" align="center">
            <h1> LORUM IPSUM </h1>
          </div>
        </div>

        <div key={'ABOUT'} className="scrollElement">
          <ScrollableAnchor id={'ABOUT'}>
            <div className="ScrollSection"/>
          </ScrollableAnchor>
          <About /> 
        </div>

        <div key={'PROJECTS'} className="scrollElement">
          <ScrollableAnchor id={'PROJECTS'}>
            <div className="ScrollSection">
              <h1> PROJECTS </h1>
            </div>
          </ScrollableAnchor>
          <Projects />
        </div>

        <div key={'LINKS'} className="Footer">
          <ScrollableAnchor id={'LINKS'}>
            <div className="ScrollSection"/>
          </ScrollableAnchor>
          <Links />
        </div>

      </div>
    );
  }
}

export default Home;
