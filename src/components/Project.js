import React, { Component } from 'react';
import '../styles/Project.scss';

class Project extends Component {

	state = {
		detailsShow: false,
	}

	showDetails = (bool) => {
		this.setState({ detailsShow: bool })
	}

  render() {
		const { title, details, url } = this.props;
		const { detailsShow } = this.state;
    return (
	      <div className="ProjectContainer">
      		<a href={url} className="ClickableDiv" 
      			onMouseOver={() => this.showDetails(true)} 
      			onMouseOut={() => this.showDetails(false)}
      		>
      			<img className="ProjectPic" src={this.props.picture} alt="projectpic"/>
		      	{<div className="ProjectDetails">
		      		<div className="Title"> { detailsShow ? title : null } </div>
		      		{ detailsShow ? <hr/> : null }
			      	<div className="Details"> { detailsShow ? details : null } </div>
		      	</div> }
     		 </a>
	      </div>
    );
  }
}

export default Project;
