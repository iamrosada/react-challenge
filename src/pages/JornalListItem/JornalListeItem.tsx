import React from 'react';
// import { Link } from 'react-router-dom';
import imageLogo from '../../assets/images/logo.svg';
import Button from '../../components/Button/button';
import styles from './scss/_jornalListItem.module.scss';

type journalType = {
  title?: string;
  index?: string;
};

export const JournalList = ({ ...props }: journalType) => {
  var model: string = '';

  if (props.index) {
    parseInt(props.index) % 2 === 0
      ? (model = 'journal_par')
      : (model = 'journal_impar');
  }
  console.log(styles.journal + model);
  return (
    <div
      className={
        model === 'journal_par'
          ? styles.journal__journal_par
          : styles.journal__journal_impar
      }
    >
      <div className={styles.journal_spine} />
      <div className={styles.journal__content}>
        <h1
          className={
            model === 'journal_par'
              ? styles.journal__title__journal_par
              : styles.journal__title__journal_impar
          }
        >
          {props.title}
        </h1>
      </div>
    </div>
  );
};
const JornalListItem = () => {
  return (
    <main className={styles.containerEmpty}>
      <header>
        <div>
          <img className="logo" src={imageLogo} alt="Logo" />
        </div>

        <button type="button">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="plus icon"
          >
            <path
              d="M6.91915 5.13223H12V6.89256H6.91915V12H5.08085V6.89256H0V5.13223H5.08085V0H6.91915V5.13223Z"
              fill="#834825"
            ></path>
          </svg>
          Add Journal
        </button>
      </header>
      <section>
        {/* {journals.map((journal) => (
          <Link
            to={`journal/${journal.id}/posts`}
            onClick={() => setJournalName(journal.title)}
            key={journal.id}
          >
            <JournalList title={journal.title} index={journal.id} />
          </Link>
        ))} */}
        <JournalList title="risad" index={'1'} />
        <Button title="Save Journal" />
      </section>
    </main>
  );
};

export default JornalListItem;
