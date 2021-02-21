import React, { ChangeEvent, memo } from 'react';
import { FormattedMessage } from 'react-intl';
import styles from './LoginInput.module.scss';

interface Props {
  type?: 'password' | 'text';
  labelId: string;
  value: string;
  onChange: (value: string) => void;
}

function LoginInput({ type = 'text', labelId, value, onChange }: Props): JSX.Element {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange(e.currentTarget.value);
  };

  return (
    <div className={styles.container}>
      <label>
        <FormattedMessage id={labelId} />
      </label>
      <input className={styles.input} type={type} value={value} onChange={handleChange} />
    </div>
  );
}

export default memo(LoginInput);
