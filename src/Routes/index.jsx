import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

const RoutesMain = ({ user, setUser }) => (
  <Routes>
    <Route path='/' element={<Home user={user} setUser={setUser} />}></Route>
    <Route path='/login' element={<Login setUser={setUser} />}></Route>
    <Route path='/register' element={<Register />}></Route>
    <Route path='*' element={<Navigate to='/' />}></Route>
  </Routes>
);

export default RoutesMain;
