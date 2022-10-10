import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { StyledContainer, StyledContainerMain, StyledUser } from './style';
import { api } from '../../../services/api';
import Loading from './Loading';

const Container = () => {
  const id = localStorage.getItem('@IdKenzieHub');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true)
        const response = await api.get(`/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.log(error)
      }
      finally{
        setLoading(false)
      }
    };
    getUser();
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
      {loading?<h1>Carregando...</h1>:<Loading user={user}/>}
      
    </StyledContainerMain>
  );
};

export default Container;
