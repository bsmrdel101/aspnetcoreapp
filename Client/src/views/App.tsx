import React from 'react';
import AddTaskForm from '../components/AddTaskForm';
import TaskList from '../components/TaskList';

export default function App() {
  return (
    <div>
      <AddTaskForm />
      <TaskList />
    </div>
  );
}
