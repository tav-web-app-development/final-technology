import React, { useState, useEffect } from 'react';
import './TaskDetail.css';

const TaskDetail = ({ taskId }) => {
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      const response = await fetch(`https://api.example.com/tasks/${taskId}`);
      const data = await response.json();
      setTask(data);
    };

    fetchTask();
  }, [taskId]);

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div className="task-detail">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskDetail;
