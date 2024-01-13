import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import taskService from '../services/taskService';

function TaskList() {
  const [, forceUpdate] = useState();

  useEffect(() => {
    const handleTaskChange = () => {
      forceUpdate({});
    };

    taskService.subscribe(handleTaskChange);

    return () => {
      taskService.unsubscribe(handleTaskChange);
    };
  }, []);

  const tasks = taskService.getTasks();

  const handleUpdateTask = (taskId, updatedTask) => {
    taskService.updateTask(taskId, updatedTask);
  };

  const handleDeleteTask = (taskId) => {
    taskService.deleteTask(taskId);
  };

  return (
    <ul className='task-container'>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdate={(updatedTask) => handleUpdateTask(task.id, updatedTask)}
          onDelete={() => handleDeleteTask(task.id)}
        />
      ))}
    </ul>
  );
}

export default TaskList;
