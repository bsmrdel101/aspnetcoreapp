import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import { Task } from '../../scripts/types';


interface TaskState {
  task: Task
}

const initialState: TaskState = {
  task: { id: 0, name: '', isComplete: false }
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.task = action.payload;
    },
    removeTasks: (state, action) => {
      state.task = action.payload;
    },
  }
});

export const { setTasks, removeTasks } = taskSlice.actions;

export const tasksList = (state: RootState) => state.task.task;

export default taskSlice.reducer;
