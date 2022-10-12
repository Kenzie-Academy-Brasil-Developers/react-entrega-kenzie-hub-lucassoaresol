import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

const RoutesMain = () => (
  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/register' element={<Register />}></Route>
    <Route path='*' element={<Navigate to='/' />}></Route>
  </Routes>
);

export default RoutesMain;
