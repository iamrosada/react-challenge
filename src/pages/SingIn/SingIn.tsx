/* eslint-disable @typescript-eslint/no-unused-vars */
import Axios from 'axios';
import React, { FormEvent, useContext } from 'react';
import { LogoMainSVG } from '../../assets/svgs';
import Button from '../../components/Button/button';
import { Input } from '../../components/Input/input-auth';
import LinkTextCustom from '../../components/LinkTextCustom/LinkTextCustom';
import TitleAuth from '../../components/TitleAuth/titleAuth';
import { AuthContext } from '../../context/userAuthContext';

import styles from './scss/_singIn.module.scss';

const SectionComponent: React.FC = ({ children }) => {
  return <section className={styles.sectionComponent}>{children}</section>;
};

const ContainerComponent: React.FC = ({ children }) => {
  return <div className={styles.containerComponent}>{children}</div>;
};

const FormComponent: React.FC = () => {
  const { setIsUserLogged, setUserId } = useContext(AuthContext);

  const handleSubmitSigIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const UserData = {
      name: formData.get('username') as string,
      password: formData.get('password') as string,
    };
    try {
      const response = await Axios.post(
        'https://fuerza.test/auth/login',
        UserData
      );
      console.log(response.status);
      if (response.status === 201) {
        window.location.href = '/journals/create';
        setUserId(response.data.user.id);
        setIsUserLogged(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className={styles['container-form']}>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
        onSubmit={handleSubmitSigIn}
      >
        <Input
          label="Your username"
          type="text"
          name="username"
          onChange={() => {}}
        />

        <Input
          label="Your Password"
          type="password"
          name="password"
          onChange={() => {}}
        />
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
      <TitleAuth>Sign in</TitleAuth>
      <LinkTextCustom bold tiny to="/sign-up">
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
