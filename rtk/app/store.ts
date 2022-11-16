import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { createLogger } from 'redux-logger';
import { counterSlice } from '../features/counterSlice';
import { postsSlice } from '../features/postSlice';

const logger = createLogger();

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    posts: postsSlice.reducer,
  },
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(logger),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {counter: CounterState}
export type AppDispatch = typeof store.dispatch
// nextjs wrapper
export const wrapper = createWrapper(() => store);