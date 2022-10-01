import React, { MouseEventHandler } from 'react';
import styles from './scss/_button.custom.module.css';

type button = {
  title?: string;
  onClick?: MouseEventHandler;
};

const Button: React.FC<button> = ({ title, onClick }) => {
  return (
    <button className={styles['button-custom']} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
