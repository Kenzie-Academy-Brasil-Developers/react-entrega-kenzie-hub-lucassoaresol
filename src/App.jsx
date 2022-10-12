import React, { useState } from 'react';
import AuthProvider from './contexts/AuthContext';
import Routes from './Routes';
import Global from './styles/global';

const App = () => {
  return (
    <>
      <Global />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
};

export default App;
