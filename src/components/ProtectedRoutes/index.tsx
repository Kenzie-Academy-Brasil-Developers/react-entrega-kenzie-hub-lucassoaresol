import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import Loading from '../Loading';

const ProtectedRoutes = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return user ? <Outlet /> : <Navigate replace to='/login' />;
};

export default ProtectedRoutes;
