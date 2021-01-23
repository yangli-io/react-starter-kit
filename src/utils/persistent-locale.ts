import { store } from "../state/store";

import Locale from '../enums/locale';

const LOCALE_KEY = '@APP/LOCALE';

const DEFAULT_LANG = Locale.ENGLISH;

export const setLocale = (lang: Locale): void => {
  localStorage.setItem(LOCALE_KEY, lang)
}

export const getLocale = (): Locale => {
  const storedLang = <Locale>localStorage.getItem(LOCALE_KEY);

  return storedLang || DEFAULT_LANG;
}