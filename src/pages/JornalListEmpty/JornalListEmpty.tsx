import React from 'react';
import imageEmpty from '../../assets/images/image-empty.svg';
import imageLogo from '../../assets/images/logo.svg';
import LinkTextCustom from '../../components/LinkTextCustom/LinkTextCustom';
import styles from './scss/_jornalempty.module.scss';

const JornalListEmpty = () => {
  return (
    <main className={styles.containerEmpty}>
      <header>
        <img className="logo" src={imageLogo} alt="Logo" />
      </header>
      <section>
        <img
          className="image_"
          src={imageEmpty}
          alt="Imagem para listas vazias"
        />
        <LinkTextCustom bold tiny to="/journals/create">
          Create a journal
        </LinkTextCustom>
      </section>
    </main>
  );
};
export default JornalListEmpty;
