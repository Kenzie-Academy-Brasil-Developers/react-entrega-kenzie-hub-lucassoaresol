import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { StyledButtonHome } from '../../styles/button';
import {
  StyledContainer,
  StyledContainerMain,
  StyledTechs,
  StyledUser,
} from './style';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import TechsCard from './TechsCard';
import { VscAdd } from 'react-icons/vsc';
import { TechContext } from '../../contexts/TechContext';
import ModalTech from './ModalTech';

const Home = () => {
  const {
    user: { name, course_module },
    techList,
    userLogout,
  } = useContext(UserContext);
  const { setOpenModal, setTypeModal } = useContext(TechContext);
  return (
    <StyledContainerMain>
      <header>
        <StyledContainer position='header'>
          <Link to='/'>
            <img src={logo} alt='Kenzie Hub' />
          </Link>
          <StyledButtonHome location='home' onClick={userLogout}>
            Sair
          </StyledButtonHome>
        </StyledContainer>
      </header>
      <>
        <StyledUser>
          <StyledContainer position='user'>
            <h1>Olá, {name}</h1>
            <h2>{course_module}</h2>
          </StyledContainer>
        </StyledUser>
        <main>
          <StyledContainer position='header'>
            <h2>Tecnologias</h2>
            <StyledButtonHome
              location='tech'
              onClick={() => {
                setOpenModal(true);
                setTypeModal(true);
              }}
            >
              <VscAdd />
            </StyledButtonHome>
          </StyledContainer>
          <>
            {techList.length ? (
              <StyledTechs>
                {techList.map((el) => (
                  <TechsCard key={el.id} tech={el} />
                ))}
              </StyledTechs>
            ) : null}
          </>
        </main>
      </>
      <ModalTech />
    </StyledContainerMain>
  );
};

export default Home;
