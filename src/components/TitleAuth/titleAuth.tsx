import React from 'react';
import styles from './scss/_titleAuth.module.scss';

const TitleAuth: React.FC = ({ children, ...rest }) => {
  return (
    <span className={styles.authtitle} {...rest}>
      {children}
    </span>
  );
};

export default TitleAuth;
