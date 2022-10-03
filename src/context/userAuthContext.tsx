import React, { createContext, useState } from 'react';
import { User } from '../interfaces/user.interface';

interface IUserAuthentication {
  user: User;
  userId: string | undefined;
  isUserLogged: boolean;
  setUser: (event: User) => void;
  setUserId: (event: string | undefined) => void;
  setIsUserLogged: (event: boolean) => void;
}

const defaultContext: IUserAuthentication = {
  userId: '',
  isUserLogged: false,
  setUser: () => {},
  setUserId: () => {},
  setIsUserLogged: () => {},
  user: { username: '', password: '', email: '', journalIds: [] },
};

export const AuthContext = createContext<IUserAuthentication>(defaultContext);

export const UserAuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(defaultContext.user);
  const [isUserLogged, setIsUserLogged] = useState(defaultContext.isUserLogged);
  const [userId, setUserId] = useState(defaultContext.userId);

  return (
    <AuthContext.Provider
      value={{
        user,
        userId,
        setUser,
        isUserLogged,
        setUserId,
        setIsUserLogged,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
