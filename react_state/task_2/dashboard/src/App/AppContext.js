import React from 'react';

const user = {
  email: '',
  password: '', 
  isLoggedIn: false,
};

const logOut = () => {};

const AppContext = React.createContext({ user, logOut });

export { user, AppContext };