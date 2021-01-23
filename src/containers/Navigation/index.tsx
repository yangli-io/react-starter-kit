import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import styles from './navigation.module.scss'
import Locale from '../../enums/locale';
import localeSlice from '../../state/locale/localeSlice'

export default function Navigation() {
  const dispatch = useDispatch();

  const changeLocale = (locale: Locale) => () => {
    dispatch(localeSlice.actions.updateLocale(locale));
  }

  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <ul className={styles.list}>
        <li>
          <span onClick={changeLocale(Locale.ENGLISH)}>en</span>
        </li>
        <li>
          <span onClick={changeLocale(Locale.FRENCH)}>fr</span>
        </li>
      </ul>
    </nav>
  )
}