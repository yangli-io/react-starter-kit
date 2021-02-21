import { createSlice } from '@reduxjs/toolkit';
import { updateProfileState } from './profileAction';

export interface ProfileState {
  username: string;
  password: string;
}

const initialState: ProfileState = {
  username: '',
  password: '',
};

export default createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfileState,
  },
});
