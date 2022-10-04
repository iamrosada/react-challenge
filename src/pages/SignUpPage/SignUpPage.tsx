/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import React, { FormEvent } from 'react';
import Button from '../../components/Button/button';
import { Input } from '../../components/Input/input-auth';
import Logo from '../../assets/images/logo.svg';
import styles from './scss/_signup.module.scss';

const FormComponent: React.FC = () => {
  const navigate = useNavigate();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const userData = {
      name: formData.get('username') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };

    userData.name && userData.password
      ? axios
          .post('https://fuerza.test/auth/signup', userData)
          .then(() => {
            navigate('/');
            toast.success('User created successfully');
          })
          .catch((error) => toast.error(error.response.data.data.message))
      : toast.error('Username and password are required');
  };
  return (
    <section className={styles.section__container}>
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

const SignUpPage = () => {
  return (
    <main className={styles.main_done}>
      <img src={Logo} alt="logo tipo" />

      <section>
        <div>
          <h2>Sign Up</h2>

          <Link to="/">Already have account</Link>
        </div>

        <FormComponent />
      </section>
    </main>
  );
};

export default SignUpPage;
