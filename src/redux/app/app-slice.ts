import { Language } from '../../shared-types/app-types.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ReduxAppState {
  currentLanguage: Language;
}

export const initialReduxAppState: ReduxAppState = {
  currentLanguage: Language.English,
};

export const reduxAppSlice = createSlice({
  name: 'app',
  initialState: initialReduxAppState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<Language>) => {
      state.currentLanguage = action.payload;
    }
  }
});

export const { changeLanguage } = reduxAppSlice.actions;
