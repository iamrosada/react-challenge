import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RoutesOfAllPage } from '../constant/routesOfAllPage';
import SignUpPage from '../pages/SignUpPage';
import SingIn from '../pages/SingIn/SingIn';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path={RoutesOfAllPage.SignIn} element={<SingIn />} />
      <Route path={RoutesOfAllPage.SignUp} element={<SignUpPage />} />
    </Routes>
  );
};

export default Router;
