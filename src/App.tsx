import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import BackgroundMain from './components/container/Background/background';
import { JournalProvider } from './context/JournalContext';
import { UserAuthProvider } from './context/userAuthContext';
import Router from './routes/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/scss/_main.scss';

function App() {
  return (
    <BrowserRouter>
      <UserAuthProvider>
        <JournalProvider>
          <BackgroundMain>
            <Router />
            <ToastContainer />
          </BackgroundMain>
        </JournalProvider>
      </UserAuthProvider>
    </BrowserRouter>
  );
}

export default App;
