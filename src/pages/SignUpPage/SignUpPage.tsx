/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import React, { FormEvent } from 'react';
import { LogoMainSVG } from '../../assets/svgs';
import Button from '../../components/Button/button';
import { Input } from '../../components/Input/input-auth';
import LinkTextCustom from '../../components/LinkTextCustom/LinkTextCustom';
import TitleAuth from '../../components/TitleAuth/titleAuth';

import styles from '../SingIn/scss/_singIn.module.scss';

const SectionComponent: React.FC = ({ children }) => {
  return <section className={styles.sectionComponent}>{children}</section>;
};
const ContainerComponent: React.FC = ({ children }) => {
  return <div className={styles.containerComponent}>{children}</div>;
};

type HanleSubmit = {
  handleSubmit: () => void;
};
const FormComponent: React.FC = () => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const userData = {
      name: formData.get('username') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };
    console.log(JSON.stringify(formData));
    try {
      const response = await axios.post(
        'https://fuerza.test/auth/signup',
        userData
      );
      if (response.status === 201) {
        window.location.href = '/journal';
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
        onSubmit={handleSubmit}
      >
        <Input
          label="Define a username"
          type="text"
          name="username"
          onChange={() => {}}
        />

        <Input
          label="Set your Password"
          type="password"
          name="password"
          onChange={() => {}}
        />
        <Input
          label="Email (optional)"
          type="email"
          name="email"
          onChange={() => {}}
        />

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button title="Create account" />
        </div>
      </form>
    </section>
  );
};

const TitleContainer = () => {
  return (
    <div className={styles['title-container']}>
      <TitleAuth>Sign up</TitleAuth>
      <LinkTextCustom bold tiny to="/">
        Already have an account
      </LinkTextCustom>
    </div>
  );
};
const SignUpPage = () => {
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

export default SignUpPage;
