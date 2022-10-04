import React, { useContext, useState } from 'react';
import imageLogo from '../../assets/images/logo.svg';
import backLogo from '../../assets/images/back.svg';
import Button from '../../components/Button/button';
import { toast } from 'react-toastify';
import styles from './scss/_createNotes.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/userAuthContext';
import { JournalContext } from '../../context/JournalContext';

type NotesType = {
  content?: string;
  onChange?: (event: any) => void;
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

export const Notes = ({ onChange }: NotesType) => {
  return (
    <textarea
      className={styles.content_textarea}
      rows={10}
      placeholder="Write your note"
      onChange={onChange}
    />
  );
};
const CreateNotes = () => {
  const navigate = useNavigate();

  const { userId } = useContext(AuthContext);
  const { journalName } = useContext(JournalContext);

  const [title, setTitle] = useState<string>();
  const [content, setContent] = useState<string>();
  let { id }: any = useParams();

  const handleNavigate = () => {
    navigate(`/journal/${id}/posts`);
  };
  const handleCreateEntry = async () => {
    if (title && content) {
      //const noteData = { title: title, content: content, userId: userId };
      try {
        const response = await axios.post(
          `https://fuerza.test/journals/entry/${id}`,
          {
            title,
            content,
            userId,
          }
        );
        if (response.status === 201) {
          navigate(`/journal/${id}/posts`);
          toast.success(
            response.status === 201
              ? `Successfully created ${title}`
              : `Failed to create ${title}`
          );
        }
      } catch (error) {
        let errorMessage = 'Failed to do something exceptional';
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        toast.error(errorMessage);
      }
    } else {
      toast.error('Title and content are required');
    }
  };

  return (
    <main className={styles.containerEmpty}>
      <header>
        <img className="logo" src={imageLogo} alt="Logo" />
        <div onClick={handleNavigate}>
          <img className="logo" src={backLogo} alt="back logo" />
          <h2>{journalName}</h2>
        </div>
      </header>
      <section>
        <Input
          onChange={(e) => {
            setTitle((e.target as HTMLInputElement).value);
          }}
        />
        <Notes onChange={(e) => setContent(e.target.value)} />

        <Button
          title="Save a note"
          onClick={(e) => {
            e.preventDefault();
            handleCreateEntry();
          }}
        />
      </section>
    </main>
  );
};

export default CreateNotes;
