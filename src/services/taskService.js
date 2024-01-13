const taskService = {
    tasks: [],
    subscribers: [],
  
    subscribe: (subscriber) => {
      taskService.subscribers.push(subscriber);
    },
  
    unsubscribe: (subscriber) => {
      taskService.subscribers = taskService.subscribers.filter(sub => sub !== subscriber);
    },
  
    notifySubscribers: () => {
      taskService.subscribers.forEach(subscriber => subscriber());
    },
  
    getTasks: () => taskService.tasks,
  
    addTask: (task) => {
      taskService.tasks.push({ ...task, id: Date.now() });
      taskService.notifySubscribers();
    },
    
    updateTask: (taskId, updatedTask) => {
        const taskIndex = taskService.tasks.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
        taskService.tasks[taskIndex] = { ...taskService.tasks[taskIndex], ...updatedTask };
        taskService.notifySubscribers();
        }
    },

    deleteTask: (taskId) => {
        taskService.tasks = taskService.tasks.filter(task => task.id !== taskId);
        taskService.notifySubscribers();
    },
    
};
  
export default taskService;