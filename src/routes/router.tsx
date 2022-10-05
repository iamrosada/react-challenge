import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { RoutesOfAllPage } from '../constant/routesOfAllPage';
import { AuthContext } from '../context/userAuthContext';
import CreateJornal from '../pages/CreateJornal/CreateJornal';
import CreateNotes from '../pages/CreateNotes/CreateNotes';
import JornalListEmpty from '../pages/JornalListEmpty/JornalListEmpty';
import JornalListItem from '../pages/JornalListItem/JornalListeItem';
import NotesListItem from '../pages/NoteListItem/NotesListItem';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import SingIn from '../pages/SingIn/SingIn';

export const ProtectedRoute = ({ children }: any) => {
  const { userId } = React.useContext(AuthContext);

  if (!userId) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};

const Router: React.FC = () => {
  return (
    <Routes>
      <Route index element={<SingIn />} />
      <Route path={RoutesOfAllPage.SignUp} element={<SignUpPage />} />
      <Route
        path={RoutesOfAllPage.CreateJournalPost}
        element={
          <ProtectedRoute>
            <JornalListEmpty />
          </ProtectedRoute>
        }
      />

      <Route
        path={RoutesOfAllPage.CreateJournal}
        element={
          <ProtectedRoute>
            <CreateJornal />
          </ProtectedRoute>
        }
      />

      <Route
        path={RoutesOfAllPage.JournalEntries}
        element={
          <ProtectedRoute>
            <JornalListItem />
          </ProtectedRoute>
        }
      />

      <Route
        path={RoutesOfAllPage.CreateNotes}
        element={
          <ProtectedRoute>
            <CreateNotes />
          </ProtectedRoute>
        }
      />
      <Route
        path={RoutesOfAllPage.NotesListItem}
        element={
          <ProtectedRoute>
            <NotesListItem />
          </ProtectedRoute>
        }
      />
      <Route
        path="*"
        element={
          <main style={{ padding: '3rem', fontSize: '10rem' }}>
            <p> Hi, there is nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
};

export default Router;
