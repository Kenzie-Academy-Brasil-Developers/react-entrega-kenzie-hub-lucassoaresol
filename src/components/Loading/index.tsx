import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { StyledLoading } from './style';

const Loading = () => {
  const { globalLoading } = useContext(UserContext);
  return <>{globalLoading && <StyledLoading>Loading...</StyledLoading>}</>;
};

export default Loading;
