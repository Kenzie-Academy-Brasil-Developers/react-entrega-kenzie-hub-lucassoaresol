import React from 'react';
import TechProvider from './contexts/TechContext';
import UserProvider from './contexts/UserContext';
import Routes from './Routes';
import Global from './styles/global';

const App = () => {
  return (
    <>
      <Global />
      <UserProvider>
        <TechProvider>
          <Routes />
        </TechProvider>
      </UserProvider>
    </>
  );
};

export default App;
