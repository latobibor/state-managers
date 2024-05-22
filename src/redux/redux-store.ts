import { configureStore } from '@reduxjs/toolkit';
import { reduxAppSlice } from './app/app-slice.ts';
import { reduxRoomManagerSlice } from './room-manager/room-manager-slice.ts';

export const store = configureStore({
  reducer: {
    app: reduxAppSlice.reducer,
    roomManager: reduxRoomManagerSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type ReduxDispatch = typeof store.dispatch;

