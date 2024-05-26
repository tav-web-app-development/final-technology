# Task Manager

A simple task management application built with React.

## Project Overview

This project is a simple Task Manager application where users can:
- View a list of tasks
- Add new tasks
- Delete tasks
- Update task status
- Fetch tasks from an API


Header: Displays the title of the application.
Footer: Displays the footer information.
TaskList: Manages the list of tasks, including fetching tasks from the API and managing the task state.
TaskItem: Represents a single task item, including its title, description, delete button, and status update button.
AddTaskForm: Provides a form to add new tasks.
EditTaskForm: Provides a form to edit existing tasks (if needed).
TaskDetail: Displays detailed information about a single task (if needed).
Notification: Displays notifications (e.g., task added, task deleted).
LoadingSpinner: Displays a loading spinner while data is being fetched.
ErrorBoundary: Catches and displays errors in the application.

API Integration
The application will interact with an API to fetch and update tasks. The api/tasks.js file will contain functions to make these API calls:

fetchTasks: Fetches the list of tasks from the API.
updateTaskStatus: Updates the status of a task on the server.

