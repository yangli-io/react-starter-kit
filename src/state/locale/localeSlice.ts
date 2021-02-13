import { createSlice } from '@reduxjs/toolkit';
import Locale from '../../enums/locale';
import { updateLocale } from './localeActions';

export interface LocaleState {
    locale: Locale | null;
}

const initialState: LocaleState = {
    locale: null,
};

export default createSlice({
    name: 'locale',
    initialState,
    reducers: {
        updateLocale,
    },
});
