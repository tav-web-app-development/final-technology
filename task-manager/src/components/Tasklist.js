import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';
import { fetchTasks, updateTaskStatus } from '../api/task';

const TaskList = ({ tasks, onDelete, onToggle }) => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const fetchAndSetTasks = async () => {
      try {
        const tasks = await fetchTasks();
        setTaskList(tasks);
      } catch (error) {
        console.error('Failed to fetch tasks', error);
      }
    };

    fetchAndSetTasks();
  }, []);

  const handleToggle = async (taskId) => {
    const task = taskList.find(task => task.id === taskId);
    if (task) {
      try {
        await updateTaskStatus(taskId, !task.completed);
        setTaskList(
          taskList.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
          )
        );
      } catch (error) {
        console.error('Failed to update task status', error);
      }
    }
  };

  return (
    <div className="task-list">
      {taskList.map(task => (
        <TaskItem key={task.id} task={task} onDelete={onDelete} onToggle={handleToggle} />
      ))}
    </div>
  );
};

export default TaskList;
