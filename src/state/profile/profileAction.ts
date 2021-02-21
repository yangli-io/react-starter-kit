import { ProfileState } from './profileSlice';

interface updateProfileStateAction {
  payload: {
    key: string;
    value: string;
  };
}

export const updateProfileState = (state: ProfileState, action: updateProfileStateAction): ProfileState => {
  return {
    ...state,
    [action.payload.key]: action.payload.value,
  };
};
