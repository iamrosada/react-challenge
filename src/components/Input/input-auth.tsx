import React, { ChangeEventHandler } from 'react';
import styles from './scss/_auth.module.scss';

type Props = {
  type: string;
  label: string;
  name: string;
  onChange: ChangeEventHandler;
};

export const Input: React.FC<Props> = ({ type, label, name, onChange }) => {
  return (
    <div className={styles['input-container']}>
      <label className={styles.filled} htmlFor="name">
        {label}
      </label>
      <input type={type} onChange={onChange} name={name} />
    </div>
  );
};
