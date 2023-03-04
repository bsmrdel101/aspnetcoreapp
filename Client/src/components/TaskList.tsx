import React, { useEffect, useState } from 'react';
import { getTasks } from '../controllers/taskController';
import { useAppSelector } from '../redux/hooks';
import { tasksList } from '../redux/reducers/taskSlice';
import { Task } from '../scripts/types';
import TaskItem from './TaskItem';


export default function TaskList() {
  const taskSelector: Task[] = useAppSelector(tasksList) as any;
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      setTasks(await getTasks() as any);
    };
    fetchTasks();
  }, [taskSelector]);


  return (
    <div className="task-list">
      <h2>To Do</h2>
      {tasks.map((task: Task) => {
        return <TaskItem key={task.id} task={task} />;
      })}
    </div>
  );
}
