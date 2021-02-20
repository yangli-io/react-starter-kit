import React from 'react';
import styles from './Button.module.scss';

interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

export default function Button({ onClick, children }: Props): JSX.Element {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
}
