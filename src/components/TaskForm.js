import React, { useState } from 'react';
import taskService from '../services/taskService';

function TaskForm() {
  const [taskTitle, setTaskTitle] = useState('');

  const handleAddTask = () => {
    if (taskTitle.trim() !== '') {
      taskService.addTask({ title: taskTitle });
      setTaskTitle('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task title"
        value={taskTitle}
        onChange={e => setTaskTitle(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TaskForm;