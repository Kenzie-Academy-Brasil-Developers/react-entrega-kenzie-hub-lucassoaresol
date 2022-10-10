import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Container from './Container';

const Home = () => {
  const token = localStorage.getItem('@TokenKenzieHub');
  return <div>{token ? <Container /> : <Navigate to='/login' />}</div>;
};

export default Home;
