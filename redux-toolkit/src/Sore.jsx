// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './components/slices/CounterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
