import React from 'react';
import imageLogo from '../../assets/images/logo.svg';
import backLogo from '../../assets/images/back.svg';
import styles from './scss/_noteListItem.module.scss';

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
  const [title, setTitle] = React.useState<string>('vida');
  const [content, setContent] = React.useState<string>('');

  console.log(setTitle, setContent, content);
  const handleNavigate = () => {
    window.location.href = '/journals';
  };

  return (
    <main className={styles.containerEmpty}>
      <header>
        <img className="logo" src={imageLogo} alt="Logo" />
        <div>
          <div onClick={handleNavigate}>
            <img className="logo" src={backLogo} alt="back logo" />
            <h2>HTML</h2>
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
            Add Notes
          </button>
        </div>
      </header>
      <section>
        <NotesList notes={title} />
        <NotesList notes={title} />
        <NotesList notes={title} />
        <NotesList notes={title} />
      </section>
    </main>
  );
};

export default NotesListItem;
