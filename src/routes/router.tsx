import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RoutesOfAllPage } from '../constant/routesOfAllPage';
import SingIn from '../pages/SingIn/SingIn';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path={RoutesOfAllPage.SignIn} element={<SingIn />} />
    </Routes>
  );
};

export default Router;
