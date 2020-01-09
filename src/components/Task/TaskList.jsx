import React from 'react';
import Task from './Task';

const TaskList = () => {

    return (
        <table className="task-list">
            <Task />
            <Task />
            <Task />
            <Task />
        </table>  
    );
}

export default TaskList;