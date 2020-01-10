import React, {useState} from 'react';
import firebase from '../../firebase';

const ButtonAddProject = () => {
    const [title, setTitle] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        firebase
            .firestore()
            .collection('projects')
            .add({
                title
            })
            .then(() => {
                setTitle('');
            })
    }

    return (
        <div className="addProject col s12">
            <div className="waves-effect waves-light btn #1976d2 blue darken-2">
                <i className="material-icons left">add</i>
                Add todo project
            </div>
            <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    value={title} 
                    onChange={e => setTitle(e.currentTarget.value)} 
                />
                <input type="submit"/>
            </form>
        </div>
    );
}

export default ButtonAddProject;