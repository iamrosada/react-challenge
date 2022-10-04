/* eslint-disable @typescript-eslint/no-unused-vars */
import Axios from 'axios';
import { toast } from 'react-toastify';
import React, { FormEvent, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/button';
import { Input } from '../../components/Input/input-auth';
import LinkTextCustom from '../../components/LinkTextCustom/LinkTextCustom';
import TitleAuth from '../../components/TitleAuth/titleAuth';
import { AuthContext } from '../../context/userAuthContext';
import Logo from '../../assets/images/logo.svg';
import styles from './scss/_singIn.module.scss';
import axios from 'axios';

const FormComponent: React.FC = () => {
  const [message, setMessage] = React.useState<string>();
  const { setIsUserLogged, setUserId } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmitSigIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const UserData = {
      name: formData.get('username') as string,
      password: formData.get('password') as string,
    };

    axios
      .post('https://fuerza.test/auth/login', UserData)
      .then((response) => {
        setUserId(response.data.user.id);

        toast.success('User logged successfully');
        navigate('/journals/entries/create');
        setIsUserLogged(true);
      })
      .catch((error) => toast.error(error.response.data.data.message));
  };
  return (
    <section className={styles.section__container}>
      <form onSubmit={handleSubmitSigIn}>
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

const SignIn = () => {
  return (
    <main className={styles.main_done}>
      <img src={Logo} alt="logo tipo" />

      <section>
        <div>
          <h2>Sign In</h2>
          {/* <a href="/signup">Sign up</a> */}
          <Link to="/signup">Sign up</Link>
        </div>

        <FormComponent />
      </section>
    </main>
  );
};

export default SignIn;
