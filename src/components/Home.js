import React, { Component } from 'react';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Rankings from './Rankings';
import '../styles/Home.scss';

import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
 
configureAnchors({offset: -80, scrollDuration: 200})

class Home extends Component {
  render() {
    return (
      <div className="contentContainer">
        <div className="row">
          
          <div className="col" align="center"></div>
          <div className="col" align="center">
          TEST
            {//<img src="circlelinkedincropbnw.png" alt="profilepic"/>
          }
          </div>
        </div>

        <div key={'ABOUT'} className="scrollElement">
          <ScrollableAnchor id={'ABOUT'}>
            <div className="ScrollSection">
              <h1> ABOUT </h1>
            </div>
          </ScrollableAnchor>
          <About /> 
        </div>

        <div key={'PROJECTS'} className="scrollElement">
          <ScrollableAnchor id={'PROJECTS'}>
            <div className="ScrollSection">
              <h1> PROJECTS </h1>
              <Projects />
            </div>
          </ScrollableAnchor>
        </div>

        <div key={'RANKINGS'} className="scrollElement">
          <ScrollableAnchor id={'RANKINGS'}>
            <div className="ScrollSection">
              <h1> RANKINGS </h1>
            </div>
          </ScrollableAnchor>
          <Rankings/>
        </div>

        <div key={'CONTACT'} className="scrollElement">
          <ScrollableAnchor id={'CONTACT'}>
            <div className="ScrollSection">
              <h1> CONTACT </h1>
            </div>
          </ScrollableAnchor>
          <Contact />
        </div>

      </div>
    );
  }
}

export default Home;
