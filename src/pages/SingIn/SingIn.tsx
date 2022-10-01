import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './scss/_singIn.module.css';

const SectionComponent: React.FC = ({ children }) => {
  return <section className={styles.sectionComponent}>{children}</section>;
};

const SignIn = () => {
  return (
    <SectionComponent>
      <div></div>
    </SectionComponent>
  );
};

export default SignIn;
