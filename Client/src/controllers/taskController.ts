import axios from "axios";
import { Task } from "../scripts/types";


// GET tasks
export const getTasks = async () => {
  try {
    const res = await axios.get('/api/task');
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// POST task
export const addTask = async (task: Task) => {
  try {
    await axios.post('/api/task', task);
  } catch (err) {
    console.log(err);
  }
};

// DELETE task
export const deleteTask = async (id: number) => {
  try {
    await axios.delete(`/api/task/${id}`);
  } catch (err) {
    console.log(err);
  }
};
