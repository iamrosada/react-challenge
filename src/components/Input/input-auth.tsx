import React, { ChangeEventHandler } from 'react';
import styles from './scss/_auth.module.scss';

type Props = {
  type: string;
  label: string;
  name: string;
  onChange?: ChangeEventHandler;
};

export const Input: React.FC<Props> = ({ type, label, name }) => {
  const [value, setValue] = React.useState('');

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <div className={styles['input-container']}>
      <input type={type} onChange={handleChange} name={name} />
      <label className={value && styles.filled} htmlFor={name}>
        {label}
      </label>
    </div>
  );
};
