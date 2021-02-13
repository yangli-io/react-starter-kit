import { useSelector } from 'react-redux';
import Locale from '../enums/locale';
import { RootState } from '../state/store';
import { getLocale } from '../utils/persistent-locale';

export default function useLocale(): Locale {
    const localeFromReducer = useSelector((state: RootState) => state.locale.locale);

    if (!!localeFromReducer) return localeFromReducer;

    const localeFromStorage = getLocale();

    if (!!localeFromStorage) return localeFromStorage;

    return Locale.ENGLISH;
}
