import { OvermindContext } from '../overmind-config.ts';
import { Language } from '../../shared-types/app-types.ts';

export function changeLanguage({ state }: OvermindContext, newLanguage: Language) {
  state.app.currentLanguage = newLanguage;
}
