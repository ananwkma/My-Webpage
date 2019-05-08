import React, { Component } from 'react';
import '../styles/Project.scss';

class Project extends Component {
  render() {
		const { title, url } = this.props;
    return (
      <div className="ProjectContainer">
      	{ title }
      	<a href={url}>Link</a>
      </div>
    );
  }
}

export default Project;
