import React from 'react';

const Project = () => {

    return (
        <div className="project z-depth-4 row">

            <div className="project-header col s12 #0288d1 light-blue darken-2">
                <div className="project-title left">
                    <i className="fas fa-align-right"></i>
                    <span>For Home</span>
                </div>
                <div className="project-tools right">
                    <i className="fas fa-pen line"></i>
                    <i className="far fa-trash-alt"></i>
                </div>
            </div>

            <div className="add-task col s12 #eeeeee grey lighten-3">
                <form>
                    <div className="col s1">
                        <i className="fas fa-plus"></i>
                    </div>
                    <div className="col s9">
                        <input 
                            type="text" 
                            className="validate"
                            placeholder="Start typing here to create a task..." 
                        />
                    </div>
                    <div className="col s2">
                        <button className="waves-effect waves-light btn-small">Add task</button>
                    </div>
                </form>
            </div>

            <div className="task-list col s12 #fafafa grey lighten-5">
                <p>No nones. Add a new note to the form above.</p>
            </div>

        </div>
    );
}

export default Project;