import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import LoginInput from '../../components/LoginInput/LoginInput';
import profileSlice from '../../state/profile/profileSlice';
import { RootState } from '../../state/store';
import styles from './LoginContainer.module.scss';

export default function Login(): JSX.Element {
  const dispatch = useDispatch();

  const handleChangeUsername = useCallback(
    (value: string) => dispatch(profileSlice.actions.updateProfileState({ key: 'username', value })),
    [dispatch],
  );

  const handleChangePassword = useCallback(
    (value: string) => dispatch(profileSlice.actions.updateProfileState({ key: 'password', value })),
    [dispatch],
  );

  const username = useSelector(({ profile }: RootState) => profile.username);
  const password = useSelector(({ profile }: RootState) => profile.password);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <FormattedMessage id="login.title" />
      </div>
      <LoginInput labelId="login.username" value={username} onChange={handleChangeUsername} />
      <LoginInput type="password" labelId="login.password" value={password} onChange={handleChangePassword} />
    </div>
  );
}
