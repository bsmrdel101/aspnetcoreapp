import React, { FormEvent, useState } from 'react';
import { addTask, getTasks } from '../controllers/taskController';
import { useAppDispatch } from '../redux/hooks';
import { setTasks } from '../redux/reducers/taskSlice';
import { Task } from '../scripts/types';


export default function AddTaskForm() {
  const [taskName, setTaskName] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    // Create new task object
    const newTask: Task = {
      id: (await getTasks()).length + 1,
      name: taskName,
      isComplete: false
    };
    await addTask(newTask);
    // Set task reducer
    dispatch(
      setTasks({
        id: newTask.id,
        name: newTask.name,
        isComplete: false
      })
    );
  };


  return (
    <div className="task-form">
      <h2>Add Task</h2>
      <form onSubmit={(e) => handleSubmitForm(e)}>
        <input
          placeholder="Wash the dishes"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
