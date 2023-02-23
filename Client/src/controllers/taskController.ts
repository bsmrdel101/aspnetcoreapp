import axios from "axios";
import { Task } from "../scripts/types";


export const getTasks = async () => {
  try {
    const res = await axios.get('/api/task');
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const addTask = async (task: Task) => {
  try {
    await axios.post('/api/task', task);
  } catch (err) {
    console.log(err);
  }
};
