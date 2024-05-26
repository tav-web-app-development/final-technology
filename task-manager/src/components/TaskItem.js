import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task, deleteTask, updateTask }) => {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <button onClick={() => updateTask(task.id, 'completed')}>Complete</button>
    </div>
  );
};

export default TaskItem;
