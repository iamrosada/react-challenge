import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import BackgroundMain from './components/container/Background/background';
import { UserAuthProvider } from './context/userAuthContext';
import Router from './routes/router';
import './styles/scss/_main.scss';

function App() {
  return (
    <BrowserRouter>
      <UserAuthProvider>
        <BackgroundMain>
          <Router />
        </BackgroundMain>
      </UserAuthProvider>
    </BrowserRouter>
  );
}

export default App;
