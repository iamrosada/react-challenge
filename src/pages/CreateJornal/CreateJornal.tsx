import axios from 'axios';
import React, { useContext } from 'react';
import imageLogo from '../../assets/images/logo.svg';
import Button from '../../components/Button/button';
import { AuthContext } from '../../context/userAuthContext';
import styles from './scss/_createjornal.module.scss';

type journalType = {
  title?: string;
};
type InputType = {
  onChange?: (event: any) => void;
};
const Input: React.FC<InputType> = ({ onChange }) => {
  return (
    <input
      className={styles.input}
      placeholder="Define title"
      onChange={onChange}
    />
  );
};

export const Journal = ({ ...props }: journalType) => {
  return (
    <div className={styles.journal}>
      <div className={styles.journal_spine} />
      <div className={styles.journal__content}>
        <h1 className={styles.journal__title}>{props.title}</h1>
      </div>
    </div>
  );
};
const CreateJornal = () => {
  const { userId } = useContext(AuthContext);
  const [title, setTitle] = React.useState<string>();

  const handleCreateJornal = async () => {
    if (title) {
      try {
        const response = await axios.post('https://fuerza.test/journals/', {
          userId,
          title,
        });
        if (response.status === 201) {
          window.location.href = '/journal';
          // 'Journal created successfully'
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      alert('Title cannot be empty');
    }
  };
  return (
    <main className={styles.containerEmpty}>
      <header>
        <img className="logo" src={imageLogo} alt="Logo" />
      </header>
      <section>
        <Journal title={title} />
        <Input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <Button
          title="Save Journal"
          onClick={(e) => {
            e.preventDefault();
            handleCreateJornal();
          }}
        />
      </section>
    </main>
  );
};

export default CreateJornal;
