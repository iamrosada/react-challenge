import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RoutesOfAllPage } from '../constant/routesOfAllPage';
import CreateJornal from '../pages/CreateJornal/CreateJornal';
import CreateNotes from '../pages/CreateNotes/CreateNotes';
import JornalListEmpty from '../pages/JornalListEmpty/JornalListEmpty';
import JornalListItem from '../pages/JornalListItem/JornalListeItem';
import NotesListItem from '../pages/NoteListItem/NotesListItem';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import SingIn from '../pages/SingIn/SingIn';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route index element={<SingIn />} />
      <Route path={RoutesOfAllPage.SignUp} element={<SignUpPage />} />

      <Route
        path={RoutesOfAllPage.CreateJournalPost}
        element={<JornalListEmpty />}
      />

      <Route path={RoutesOfAllPage.CreateJournal} element={<CreateJornal />} />

      <Route
        path={RoutesOfAllPage.JournalEntries}
        element={<JornalListItem />}
      />

      <Route path={RoutesOfAllPage.CreateNotes} element={<CreateNotes />} />
      <Route path={RoutesOfAllPage.NotesListItem} element={<NotesListItem />} />
    </Routes>
  );
};

export default Router;
