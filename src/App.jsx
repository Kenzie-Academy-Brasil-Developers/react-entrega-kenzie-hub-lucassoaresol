import React from 'react';
import StartProvider from './contexts/StartContext';
import Routes from './Routes';
import Global from './styles/global';

const App = () => {
  return (
    <>
      <Global />
      <StartProvider>
        <Routes />
      </StartProvider>
    </>
  );
};

export default App;
