import React, { Component } from 'react';
import '../styles/Project.scss';

class Project extends Component {

	state = {
		detailsShow: false,
	}

	renderDetails = () => {
		return (
			<div className="ProjectDetails">
				<h1> XDDDDD </h1>
			</div>
		)
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
		      	<div className="ProjectDetails">
			      	{ detailsShow ? details : title }
		      	</div>
     		 	</a>
	      </div>
    );
  }
}

export default Project;
