// src/api/tasks.js
export const fetchTasks = async () => {
    const response = await fetch('/api/tasks');
    if (!response.ok) {
      throw new Error('Failed to fetch tasks');
    }
    return await response.json();
  };
  
  export const updateTaskStatus = async (taskId, status) => {
    const response = await fetch(`/api/tasks/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    });
    if (!response.ok) {
      throw new Error('Failed to update task status');
    }
    return await response.json();
  };
  