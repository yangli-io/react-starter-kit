import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import localeSlice from './locale/localeSlice';
import profileSlice from './profile/profileSlice';

export const store = configureStore({
  reducer: {
    locale: localeSlice.reducer,
    profile: profileSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
