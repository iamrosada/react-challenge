import React from 'react';
import { LogoMainSVG } from '../../assets/svgs';
import LinkTextCustom from '../../components/LinkTextCustom/LinkTextCustom';
import TitleAuth from '../../components/TitleAuth/titleAuth';
// import { useNavigate } from 'react-router-dom';
// import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './scss/_singIn.module.scss';

const SectionComponent: React.FC = ({ children }) => {
  return <section className={styles.sectionComponent}>{children}</section>;
};

const ContainerComponent: React.FC = ({ children }) => {
  return <div className={styles.containerComponent}>{children}</div>;
};

const FormComponent: React.FC = ({ children }) => {
  return <form action="">{children}</form>;
};

const TitleContainer = () => {
  return (
    <div className={styles['title-container']}>
      <TitleAuth>Sing In</TitleAuth>
      <LinkTextCustom bold tiny>
        Sing up
      </LinkTextCustom>
    </div>
  );
};
const SignIn = () => {
  return (
    <SectionComponent>
      <LogoMainSVG width="20.524rem" height="4.3rem" />
      <TitleContainer />
      <ContainerComponent>
        <FormComponent></FormComponent>
      </ContainerComponent>
    </SectionComponent>
  );
};

export default SignIn;
