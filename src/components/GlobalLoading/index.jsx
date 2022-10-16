import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { StyledLoading } from './style';

const GlobalLoading = ({ children }) => {
  const { globalLoading } = useContext(UserContext);
  return (
    <>{globalLoading ? <StyledLoading>Loading...</StyledLoading> : children}</>
  );
};

export default GlobalLoading;
