import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { StyledContainer, StyledContainerMain, StyledUser } from './style';
import { api } from '../../../services/api';
import Loading from '../../../components/Loading';

const Container = ({ user, setUser }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const getProfile = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('@TokenKenzieHub');
        const response = await api.get('profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (!user) {
      getProfile();
    }
  }, []);
  return (
    <StyledContainerMain>
      <header>
        <StyledContainer position='header'>
          <img src={logo} alt='Kenzie Hub' />
          <button
            onClick={() => {
              localStorage.removeItem('@TokenKenzieHub');
              navigate('/login');
            }}
          >
            Sair
          </button>
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
