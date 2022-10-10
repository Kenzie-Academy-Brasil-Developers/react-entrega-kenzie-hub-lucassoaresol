import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Container from './Container';

const Home = ({ user, setUser }) => {
  const token = localStorage.getItem('@TokenKenzieHub');
  return (
    <div>{token ? <Container user={user} setUser={setUser} /> : <Navigate to='/login' />}</div>
  );
};

export default Home;
