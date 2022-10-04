import React from 'react';
import { AddSVG } from '../../assets/svgs';
import styles from './scss/_button.add.module.scss';

type Props = {
  to: string;
};

const ButtonAdd: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <button className={styles['button-add']} {...rest}>
      <AddSVG aria-label="plus icon" />
      <span className={styles['text-children']}>{children}</span>
    </button>
  );
};

export default ButtonAdd;
