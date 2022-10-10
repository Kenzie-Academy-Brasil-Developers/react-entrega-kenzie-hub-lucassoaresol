import React from 'react';
import { StyledContainer, StyledUser } from '../style';

const Loading = ({ user }) => {
  return (
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
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </h4>
        </StyledContainer>
      </main>
    </>
  );
};

export default Loading;
