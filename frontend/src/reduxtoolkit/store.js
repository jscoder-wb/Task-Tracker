import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice.js';
import taskReducer from './tasks/taskSlice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
  },
});
