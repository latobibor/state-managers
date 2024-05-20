import { Language } from '../../shared-types/app-types.ts';

export interface AppState {
  currentLanguage: Language;
}

export const appState: AppState = {
  currentLanguage: Language.English,
};
