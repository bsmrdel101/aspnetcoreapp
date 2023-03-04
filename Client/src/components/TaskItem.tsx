import React from 'react';
import { deleteTask } from '../controllers/taskController';
import { useAppDispatch } from '../redux/hooks';
import { removeTasks } from '../redux/reducers/taskSlice';
import { Task } from '../scripts/types';


interface Props {
  task: Task
}

export default function TaskItem({ task }: Props) {
  const dispatch = useAppDispatch();
  
  // Completes a task and removes it from the task list
  const completeTask = () => {
    deleteTask(task.id);
    // Update task reducer
    dispatch(
      removeTasks({
        id: task.id,
      })
    );
  };


  return (
    <div className="task-list__task">
      <h3>{ task.name }</h3>
      <button className="task-list__task--complete-btn" onClick={completeTask}>Done</button>
    </div>
  );
}
