import axios from 'axios';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import imageLogo from '../../assets/images/logo.svg';
import { JournalContext } from '../../context/JournalContext';
import { AuthContext } from '../../context/userAuthContext';
import styles from './scss/_jornalListItem.module.scss';

type journalType = {
  title?: string;
  index?: string;
};

export const JournalList = ({ ...props }: journalType) => {
  var viewJournal: string = '';

  if (props.index) {
    parseInt(props.index) % 2 === 0
      ? (viewJournal = 'journal_par')
      : (viewJournal = 'journal_impar');
  }

  return (
    <div
      className={
        viewJournal === 'journal_par'
          ? styles.journal__journal_par
          : styles.journal__journal_impar
      }
    >
      <div className={styles.journal_spine} />
      <div className={styles.journal__content}>
        <h1
          className={
            viewJournal === 'journal_par'
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
  const { journals, setJournals, setJournalName } = useContext(JournalContext);
  const { userId } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/journals/create');
  };

  React.useEffect(() => {
    axios.get(`https://fuerza.test/journals/${userId}`).then((response) => {
      setJournals(response.data.journals);
    });
  }, [setJournals, userId]);

  return (
    <main className={styles.containerEmpty}>
      <header>
        <div>
          <img className="logo" src={imageLogo} alt="Logo" />
        </div>

        <button type="button" onClick={handleNavigate}>
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
        {journals.map((journal: any) => (
          <Link
            to={`/journal/${journal.id}/posts`}
            key={journal.id}
            onClick={() => setJournalName(journal.title)}
          >
            <JournalList title={journal.title} index={journal.id} />
          </Link>
        ))}
      </section>
    </main>
  );
};

export default JornalListItem;
