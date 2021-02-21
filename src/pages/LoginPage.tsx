import React from 'react';
import LoginContainer from '../containers/LoginContainer/LoginContainer';
import styles from './LoginPage.module.scss';

export default function Login(): JSX.Element {
  return (
    <form className={styles.container}>
      <LoginContainer />
    </form>
  );
}
