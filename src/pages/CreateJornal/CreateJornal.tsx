import React from 'react';
import imageLogo from '../../assets/images/logo.svg';
import Button from '../../components/Button/button';
import styles from './scss/_createjornal.module.scss';

type journalType = {
  title?: string;
  index?: string;
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
  const [title, setTitle] = React.useState('');
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

        <Button title="Save Journal" />
      </section>
    </main>
  );
};

export default CreateJornal;
