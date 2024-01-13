import React from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { auth } from '../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';

const TaskManager = () => {
    const handleLogout = () => {
        auth.signOut();
    };
    return (
        <div className="tasks-manager">
            <button className='logout-btn' onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOut} />
            </button>
            <h1>Gestor de Tareas</h1>
            <TaskForm />
            <TaskList />
        </div>
    );
};

export default TaskManager;
