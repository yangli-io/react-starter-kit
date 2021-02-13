import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import localeSlice from './locale/localeSlice';

export const store = configureStore({
    reducer: {
        locale: localeSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
