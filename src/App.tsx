import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import BackgroundMain from './components/container/Background/background';
import Router from './routes/router';
import './styles/scss/_main.scss';

function App() {
  return (
    <BrowserRouter>
      <BackgroundMain>
        <Router />
      </BackgroundMain>
    </BrowserRouter>
  );
}

export default App;
