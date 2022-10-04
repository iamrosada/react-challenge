import React, { MouseEventHandler } from 'react';
import styles from './scss/_button.module.scss';

type buttonType = {
  title?: string;
  onClick?: MouseEventHandler;
};

const Button: React.FC<buttonType> = ({ title, onClick }) => {
  return (
    <button type="submit" onClick={onClick} className={styles['custom_custom']}>
      {title}
    </button>
  );
};

export default Button;
