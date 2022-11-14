import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { counterSlice } from '../features/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {counter: CounterState}
export type AppDispatch = typeof store.dispatch
// nextjs wrapper
export const wrapper = createWrapper(() => store);