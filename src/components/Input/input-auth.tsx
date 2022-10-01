import React, { useState } from 'react';
import styles from './scss/_auth.module.scss';

type Props = {
  type: string;
  label: string;
};

export const TextInput: React.FC<Props> = ({ type, label }) => {
  const [value, setValue] = useState('');

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(e.target.value);
  };

  return (
    <form>
      <div className={styles['input-container']}>
        <label className={value && styles.filled} htmlFor="name">
          {label}
        </label>
        <input type={type} onChange={handleChange} />
      </div>
    </form>
  );
};
