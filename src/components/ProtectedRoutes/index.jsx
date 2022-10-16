import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

const ProtectedRoutes = () => {
  const { user, globalLoading } = useContext(UserContext);

  if (globalLoading) {
    return null;
  }

  return user ? <Outlet /> : <Navigate replace to='/login' />;
};

export default ProtectedRoutes;
