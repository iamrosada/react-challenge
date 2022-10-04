import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RoutesOfAllPage } from '../constant/routesOfAllPage';
import CreateJornal from '../pages/CreateJornal/CreateJornal';
import CreateNotes from '../pages/CreateNotes/CreateNotes';
import JornalListEmpty from '../pages/JornalListEmpty/JornalListEmpty';
import JornalListItem from '../pages/JornalListItem/JornalListeItem';
// import JornalPostListRead from '../pages/JornalPostListRead/JornalPostListRead';
import NotesListItem from '../pages/NoteListItem/NotesListItem';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import SingIn from '../pages/SingIn/SingIn';

const Router: React.FC = () => {
  return (
    <Routes>
      {/*first page singIn */}
      <Route index element={<SingIn />} />

      <Route path={RoutesOfAllPage.SignUp} element={<SignUpPage />} />

      {/*second if is everting good page singIn */}

      <Route
        path={RoutesOfAllPage.CreateJournalPost}
        element={<JornalListEmpty />}
      />
      {/* para criar os jornais */}
      <Route path={RoutesOfAllPage.CreateJournal} element={<CreateJornal />} />

      <Route
        path={RoutesOfAllPage.JournalEntries}
        element={<JornalListItem />}
      />
      {/* <Route path="/journal/:id/posts" element={<JornalPostListRead />} /> */}
      <Route
        path="/journals/entries/journal/:id/posts"
        element={<CreateNotes />}
      />
      <Route path="/journal/:id/posts" element={<NotesListItem />} />
    </Routes>
  );
};

export default Router;
