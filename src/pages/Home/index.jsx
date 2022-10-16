import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { StyledButton } from '../../styles/button';
import { StyledContainer, StyledContainerMain, StyledUser } from './style';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import TechsCard from './TechsCard';

const Home = () => {
  const { user, userLogout } = useContext(UserContext);
  return (
    <StyledContainerMain>
      <header>
        <StyledContainer position='header'>
          <Link to='/'>
            <img src={logo} alt='Kenzie Hub' />
          </Link>
          <StyledButton location='home' onClick={userLogout}>
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
            <ul>
              {user.techs.map((el) => (
                <TechsCard key={el.id} tech={el} />
              ))}
            </ul>
          </StyledContainer>
        </main>
      </>
    </StyledContainerMain>
  );
};

export default Home;
