import React, { useState } from 'react';
import Routes from './Routes';
import Global from './styles/global';

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <>
      <Global />
      <Routes user={user} setUser={setUser} />
    </>
  );
};

export default App;
