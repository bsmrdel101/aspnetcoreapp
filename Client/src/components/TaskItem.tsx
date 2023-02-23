import React, { useState } from 'react';
import { Task } from '../scripts/types';


interface Props {
  task: Task
}

export default function TaskItem({ task }: Props) {
  return (
    <div className="task-list__task">
      <h3>{ task.name }</h3>
      <button className="task-list__task--complete-btn">Done: { task.isComplete ? <span>Yes</span> : <span>No</span> }</button>
    </div>
  );
}
