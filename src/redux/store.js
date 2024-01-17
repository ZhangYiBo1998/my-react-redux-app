import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import sumReducer from './sum/sumSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sum: sumReducer
  },
});
