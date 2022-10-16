import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoutes from '../components/ProtectedRoutes';
import TestLoginRoutes from '../components/TestLoginRoutes';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

const RoutesMain = () => (
  <Routes>
    <Route element={<TestLoginRoutes />}>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
    </Route>
    <Route element={<ProtectedRoutes />}>
      <Route path='/' element={<Home />}></Route>
    </Route>
    <Route path='*' element={<Navigate to='/' />}></Route>
  </Routes>
);

export default RoutesMain;
