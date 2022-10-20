import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import Loading from '../Loading';

const TestLoginRoutes = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return user ? <Navigate replace to='/' /> : <Outlet />;
};

export default TestLoginRoutes;
