import React from 'react';
import GlobalLoading from './components/GlobalLoading';
import UserProvider from './contexts/UserContext';
import Routes from './Routes';
import Global from './styles/global';

const App = () => {
  return (
    <>
      <Global />
      <UserProvider>
        <GlobalLoading>
          <Routes />
        </GlobalLoading>
      </UserProvider>
    </>
  );
};

export default App;
