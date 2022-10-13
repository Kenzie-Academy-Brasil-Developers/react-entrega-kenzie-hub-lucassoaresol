import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { StartContext } from '../../contexts/StartContext';

const ProtectedRoutes = () => {
  const { user, isGoToken } = useContext(StartContext);

  if (isGoToken) {
    return null;
  }

  return user ? <Outlet /> : <Navigate replace to='/login' />;
};

export default ProtectedRoutes;
