import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TaskList from './components/Tasklist';
import AddTaskForm from './components/AddTaskForm';
import ErrorBoundary from './components/ErrorBoundary';
import Notification from './components/Notification';
import { fetchTasks, updateTaskStatus } from './api/task';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const fetchAndSetTasks = async () => {
      try {
        const tasks = await fetchTasks();
        setTasks(tasks);
      } catch (error) {
        console.error('Failed to fetch tasks', error);
      }
    };

    fetchAndSetTasks();
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1, completed: false }]);
    setNotification('Task added successfully!');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    setNotification('Task deleted successfully!');
  };

  const toggleTaskStatus = async (id) => {
    const task = tasks.find((task) => task.id === id);
    try {
      await updateTaskStatus(id, !task.completed);
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
      setNotification('Task status updated successfully!');
    } catch (error) {
      console.error('Failed to update task status', error);
    }
  };

  return (
    <div className="App">
      <ErrorBoundary>
        <Header />
        <Notification message={notification} />
        <AddTaskForm onAdd={addTask} />
        <TaskList
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleTaskStatus}
        />
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default App;
