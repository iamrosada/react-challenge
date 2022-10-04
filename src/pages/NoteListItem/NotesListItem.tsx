import React, { useContext } from 'react';
import imageLogo from '../../assets/images/logo.svg';
import backLogo from '../../assets/images/back.svg';
import styles from './scss/_noteListItem.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import { JournalContext } from '../../context/JournalContext';
import JornalPostListRead from '../JornalPostListRead/JornalPostListRead';

type NotesType = {
  notes?: string;
};

export const NotesList = ({ notes }: NotesType) => {
  return (
    <div className={styles.container__notes__read}>
      <p>{notes}</p>
    </div>
  );
};

const NotesListItem = () => {
  const navigate = useNavigate();

  const { entries, setEntries, journalName } = useContext(JournalContext);

  let { id }: any = useParams();
  let url = window.location.pathname;

  React.useEffect(() => {
    axios
      .get(`https://fuerza.test/journals/entries/${id}`)
      .then((response) => setEntries(response.data.entries));
  }, [id, setEntries]);

  const handleNavigateToAddNote = () => {
    navigate(`/journals/entries${url}`);
  };
  const handleNavigateToJournal = () => {
    navigate('/journals/entries');
  };

  return (
    <>
      {entries.length > 0 ? (
        <main className={styles.containerEmpty}>
          <header>
            <img className="logo" src={imageLogo} alt="Logo" />
            <div>
              <div onClick={handleNavigateToJournal}>
                <img className="logo" src={backLogo} alt="back logo" />
                <h2>{journalName}</h2>
              </div>
              <button type="button" onClick={handleNavigateToAddNote}>
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
                Add Notes
              </button>
            </div>
          </header>
          <section>
            {entries.map(
              (entry: any, i: number) => (
                console.log('entry', entry),
                (<NotesList key={i} notes={entry.content} />)
              )
            )}
          </section>
        </main>
      ) : (
        <JornalPostListRead />
      )}
    </>
  );
};

export default NotesListItem;
