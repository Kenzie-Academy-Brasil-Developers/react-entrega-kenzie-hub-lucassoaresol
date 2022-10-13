import React, { useContext } from 'react';
import Loading from '../../components/Loading';
import { StartContext } from '../../contexts/StartContext';
import { StyledButton } from '../../styles/button';
import { StyledContainer, StyledContainerMain, StyledUser } from './style';
import logo from '../../assets/logo.svg';

const Home = () => {
  const { loading, user, navigate } = useContext(StartContext);
  return (
    <StyledContainerMain>
      <header>
        <StyledContainer position='header'>
          <img src={logo} alt='Kenzie Hub' />
          <StyledButton
            location='home'
            onClick={() => {
              localStorage.removeItem('@TokenKenzieHub');
              navigate('/login');
            }}
          >
            Sair
          </StyledButton>
        </StyledContainer>
      </header>
      <>
        <StyledUser>
          <StyledContainer position='user'>
            <h1>Olá, {user.name}</h1>
            <h2>{user.course_module}</h2>
          </StyledContainer>
        </StyledUser>
        <main>
          <StyledContainer>
            <h3>Que pena! Estamos em desenvolvimento :(</h3>
            <h4>
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </h4>
          </StyledContainer>
        </main>
      </>
      {loading && <Loading />}
    </StyledContainerMain>
  );
};

export default Home;
