import React from 'react';
import { Task } from '../scripts/types';


interface Props {
  task: Task
}

export default function TaskItem({ task }: Props) {
  return (
    <div className="task">
      <h2>{ task.name }</h2>
      <p>Done: { task.isComplete ? <span>Yes</span> : <span>No</span> }</p>
    </div>
  );
}
