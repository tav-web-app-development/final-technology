import React, { useState } from 'react';
import './EditTaskForm.css';

const EditTaskForm = ({ task, updateTask }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(task.id, { title, description });
  };

  return (
    <form className="edit-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Update Task</button>
    </form>
  );
};

export default EditTaskForm;
