import React from 'react';
import { Task } from '../scripts/types';


export default function AddTaskForm() {
  return (
    <div className="task-form">
      <h2>Add Task</h2>
      <form>
        <input
          placeholder="Wash the dishes"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
