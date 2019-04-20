import React, { Component } from 'react';
import '../styles/Home.css';

import ScrollableAnchor from 'react-scrollable-anchor'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="row">
          
          <div className="col" align="center"></div>
          <div className="col" align="center">
          TEST
            {//<img src="circlelinkedincropbnw.png" alt="profilepic"/>
          }
          </div>
        </div>

        <div key={'HOME'}>
          <ScrollableAnchor id={'HOME'}>
            <div>
              <h1> HOME </h1>
            </div>
          </ScrollableAnchor>
          <div style={{height: '500px', backgroundColor: 'white'}}/>
        </div>

        <div key={'ABOUT'}>
          <ScrollableAnchor id={'ABOUT'}>
            <div>
              <h1> ABOUT </h1>
            </div>
          </ScrollableAnchor>
          <div style={{height: '500px', backgroundColor: 'white'}}/>
        </div>

        <div key={'PROJECTS'}>
          <ScrollableAnchor id={'PROJECTS'}>
            <div>
              <h1> PROJECTS </h1>
            </div>
          </ScrollableAnchor>
          <div style={{height: '500px', backgroundColor: 'white'}}/>
        </div>

        <div key={'CONTACT'}>
          <ScrollableAnchor id={'CONTACT'}>
            <div>
              <h1> CONTACT </h1>
            </div>
          </ScrollableAnchor>
          <div style={{height: '500px', backgroundColor: 'white'}}/>
        </div>

      </div>
    );
  }
}

export default Home;
