import axios from "axios";


export const getTasks = async () => {
  try {
    const res = await axios.get('/api/task');
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
