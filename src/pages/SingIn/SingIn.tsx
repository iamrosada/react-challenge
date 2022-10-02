import React from 'react';
import { LogoMainSVG } from '../../assets/svgs';
import Button from '../../components/Button/button';
import { Input } from '../../components/Input/input-auth';
import LinkTextCustom from '../../components/LinkTextCustom/LinkTextCustom';
import TitleAuth from '../../components/TitleAuth/titleAuth';

import styles from './scss/_singIn.module.scss';

const SectionComponent: React.FC = ({ children }) => {
  return <section className={styles.sectionComponent}>{children}</section>;
};

const ContainerComponent: React.FC = ({ children }) => {
  return <div className={styles.containerComponent}>{children}</div>;
};

const FormComponent: React.FC = () => {
  return (
    <section className={styles['container-form']}>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Input label="Your username" type="text" />

        <Input label="Your Password" type="password" />
        <LinkTextCustom tiny is to="/">
          Forgot password?
        </LinkTextCustom>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button title="Log in" />
        </div>
      </form>
    </section>
  );
};

const TitleContainer = () => {
  return (
    <div className={styles['title-container']}>
      <TitleAuth>Sing In</TitleAuth>
      <LinkTextCustom bold tiny to="/">
        Sing up
      </LinkTextCustom>
    </div>
  );
};
const SignIn = () => {
  return (
    <SectionComponent>
      <ContainerComponent>
        <LogoMainSVG width="20.524rem" height="4.3rem" />
        <TitleContainer />
        <FormComponent />
      </ContainerComponent>
    </SectionComponent>
  );
};

export default SignIn;
