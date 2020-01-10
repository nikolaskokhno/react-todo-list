import React, {useState, useEffect} from 'react';
import firebase from '../../firebase';
import Project from './Project';

const ProjectList = () => {

    const projects = useProjects();
    console.log(projects.length);

    return (
        <div className="project-list col s12">
            {
                 projects.length !== 0
                    ? projects.map((project) => (
                        <Project key={project.id} title={project.title} />
                    ))
                    : <h5>Unfortunately there are no new projects, click the button below to add!</h5>
            }
        </div>
    );
}

const useProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        firebase
            .firestore()
            .collection('projects')
            .onSnapshot((snapshot) => {
                const newProjects = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))

                setProjects(newProjects);
            })
    }, []) 

    return projects;
}

export default ProjectList;
