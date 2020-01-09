import React from 'react';

const Task = () => {

    return (
        <tbody>
            <tr className="task col s12 #fafafa grey lighten-5">
                <td className="col s1">
                    <label>
                        <input 
                            type="checkbox" 
                            className="filled-in"
                        />
                        <span></span>
                    </label>
                </td>
                <td className="col s9">
                    This is name task
                </td>
                <td className="col s2">
                    <div className="task-tools right">
                        <i className="fas fa-pen line"></i>
                        <i className="far fa-trash-alt"></i>
                    </div>
                </td>
            </tr>
        </tbody>
    );
}

export default Task;