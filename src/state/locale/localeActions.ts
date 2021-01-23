import Locale from '../../enums/locale';
import { setLocale } from '../../utils/persistent-locale'
import { LocaleState } from './localeSlice';

interface UpdateLocaleAction {
  payload: Locale
}

export const updateLocale = (state: LocaleState, action: UpdateLocaleAction): LocaleState => {
  if (action.payload) {
    setLocale(action.payload); // save to local storage
  }
  
  return {
    ...state,
    locale: action.payload
  };
}