import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { StyledLogin, StyledSection } from './style';
import { Link } from 'react-router-dom';
import { GrFormView, GrFormViewHide} from 'react-icons/gr'

const Login = () => {
  const [isView, setIsView] = useState(false)
  return (
    <StyledLogin>
      <h1>Kenzie Hub</h1>
      <StyledSection>
        <h2>Login</h2>
        <form onSubmit={console.log('oi')}>
          <label htmlFor='email'>Email</label>
          <input id='email' type='text' placeholder='Digite aqui seu email' />
          <label htmlFor='password'>Senha</label>
          {isView?
          <div>
            <input id='password' type='text' placeholder='Digite aqui sua senha' />
            <span onClick={() => setIsView(false)}><GrFormViewHide /></span>
          </div>:
          <div>
            <input id='password' type='password' placeholder='Digite aqui sua senha' />
            <span onClick={() => setIsView(true)}><GrFormView /></span>
          </div>}
          <button type='submit'>Entrar</button>
        </form>
        <Link to='../register'>
          <span>Ainda não possui uma conta?</span>
          <span>Cadastre-se</span>
        </Link>
      </StyledSection>
    </StyledLogin>
  );
};

export default Login;
