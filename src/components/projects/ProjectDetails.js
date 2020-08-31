import React from 'react';

function ProjectDetails(props) {
  const { id } = props.match.params;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">This is the title - {id}</span>
          <p>This is the p</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by Mendy</div>
          <div>Aug 28 2020</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
