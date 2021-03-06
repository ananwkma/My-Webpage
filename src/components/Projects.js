import React, { Component } from 'react';
import '../styles/Projects.scss';
import Project from './Project';

class Projects extends Component {
  render() {
    return (
      <div className="ProjectsContainer">
      	<div className="RowContainer">
	        <Project 
	        	title="HackerNews" 
	        	url="http://35.236.21.220:3001/"
	        	details="Clone of HackerNews"
	        	picture="hackernews3.png"
	        /> 
	        <Project 
	        	title="Would You Rather" 
	        	url="http://35.236.21.220:3000/login"
	        	details="Basic polling app with login and leaderboard functionality"
	        	picture="wouldyourather2.png"
	        /> 
	        <Project 
	        	title="Lichess Stat Tracker" 
	        	url="https://codesandbox.io/s/github/ananwkma/Lichess-Stat-Tracker"
	        	details="Widget utilizing Lichess API to retrieve stats"
	        	picture="lichess2.jpg"
	        />
	    </div>
	    <div className="RowContainer">
	        <Project 
	        	title="Checkout Widget" 
	        	url="https://codesandbox.io/s/github/ananwkma/Checkout"
	        	details="Ecommerce checkout widget (promo code: DISCOUNT)"
	        	picture="checkout.jpg"
	        /> 
	        <Project 
	        	title="LearnStart" 
	        	url="http://35.236.21.220:3003/"
	        	details="CSS responsive styling sample"
	        	picture="learnstart.jpg"
	        /> 
	        <Project 
	        	title="Juji Responsive Page" 
	        	url="http://35.236.21.220:3002/"
	        	details="CSS responsive styling sample"
	        	picture="juji.jpg"
	        />
	    </div>
      </div>
    );
  }
}

export default Projects;
