import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import imageEmpty from '../../assets/images/image-empty.svg';
import imageLogo from '../../assets/images/logo.svg';
import LinkTextCustom from '../../components/LinkTextCustom/LinkTextCustom';
import { JournalContext } from '../../context/JournalContext';

import styles from './scss/_journalPostListRead.module.scss';

const JornalPostListRead = () => {
  const { journalName } = useContext(JournalContext);

  let { id }: any = useParams();

  return (
    <main className={styles.containerEmpty}>
      <header>
        <img className="logo" src={imageLogo} alt="Logo" />
      </header>

      <section>
        <div className="title_">
          <h2>{journalName}</h2>
        </div>
        <img
          className="image_"
          src={imageEmpty}
          alt="Imagem para listas vazias"
        />
        <LinkTextCustom bold tiny to={`/journals/entries/journal/${id}/posts`}>
          Create a notes
        </LinkTextCustom>
      </section>
    </main>
  );
};
export default JornalPostListRead;
