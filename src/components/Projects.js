import React, { Component } from 'react';
import '../styles/Projects.scss';
import Project from './Project';

class Projects extends Component {
  render() {
    return (
      <div className="ProjectsContainer">
      	<div className="RowContainer">
	        <Project title="HackerNews" url="http://35.236.21.220:3001/"/> 
	        <Project title="Would You Rather" url="http://35.236.21.220:3000/login"/> 
	        <Project title="Lichess Stat Tracker" url="https://codesandbox.io/s/github/ananwkma/Lichess-Stat-Tracker"/>
	    </div>
	    <div className="RowContainer">
	        <Project title="Checkout Widget" url="https://codesandbox.io/s/github/ananwkma/Checkout"/> 
	        <Project title="LearnStart" url="http://35.236.21.220:3003/"/> 
	        <Project title="Juji Responsive Page" url="http://35.236.21.220:3002/"/>
	    </div>
      </div>
    );
  }
}

export default Projects;
