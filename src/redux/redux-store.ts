import { configureStore } from '@reduxjs/toolkit';
import { reduxAppSlice } from './app/app-slice.ts';

export const store = configureStore({
  reducer: {
    app: reduxAppSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

