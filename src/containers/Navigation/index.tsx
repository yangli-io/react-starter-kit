import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './navigation.module.scss';
import Locale from '../../enums/locale';
import localeSlice from '../../state/locale/localeSlice';

export default function Navigation(): JSX.Element {
  const dispatch = useDispatch();

  const changeLocale = (locale: Locale) => (): void => {
    dispatch(localeSlice.actions.updateLocale(locale));
  };

  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <li>
          <Link className={styles.link} to="/">
            Home
          </Link>
        </li>
        <li test-id="about-navigation">
          <Link className={styles.link} to="/about">
            About
          </Link>
        </li>
      </ul>

      <div className={styles.rightSide}>
        <ul className={styles.list}>
          <li>
            <span className={styles.locale} onClick={changeLocale(Locale.ENGLISH)}>
              en
            </span>
          </li>
          <li>
            <span className={styles.locale} onClick={changeLocale(Locale.FRENCH)}>
              fr
            </span>
          </li>
        </ul>
        <span>
          <Link className={styles.link} to="/login">
            Login
          </Link>
        </span>
      </div>
    </nav>
  );
}
