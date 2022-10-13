import React, { useContext } from 'react';
import logo from '../../../assets/logo.svg';
import { StyledContainer, StyledContainerMain, StyledUser } from './style';
import Loading from '../../../components/Loading';
import { StartContext } from '../../../contexts/StartContext';
import { StyledButton } from '../../../styles/button';

const Container = () => {
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
        {user && (
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
        )}
      </>
      {loading && <Loading />}
    </StyledContainerMain>
  );
};

export default Container;
