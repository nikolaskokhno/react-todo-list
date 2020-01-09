import React from 'react';
import Project from './Project';

const ProjectList = () => {

    return (
        <div className="project-list col s12">
            <Project />
            {/* <h5>There are no projects yet. Click on the button below to add a new project.</h5> */}
        </div>
    );
}

export default ProjectList;