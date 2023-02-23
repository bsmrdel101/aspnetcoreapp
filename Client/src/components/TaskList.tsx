import React, { useEffect, useState } from 'react';
import { getTasks } from '../controllers/taskController';
import { Task } from '../scripts/types';
import TaskItem from './TaskItem';


export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      setTasks(await getTasks() as any);
    };
    fetchTasks();
  }, []);


  return (
    <div className="task-list">
      <h2>To Do</h2>
      {tasks.map((task: Task) => {
        return <TaskItem task={task} />;
      })}
    </div>
  );
}
