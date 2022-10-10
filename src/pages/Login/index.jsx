import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { StyledLogin, StyledSection } from './style';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IoMdInformationCircle } from 'react-icons/io';
import { api } from '../../services/api';
import logo from '../../assets/logo.svg';
import { toast } from 'react-toastify';

const schema = yup.object({
  email: yup
    .string()
    .email('Deve ser um e-mail válido')
    .required('Email é obrigatório'),
  password: yup.string().required('Senha é obrigatório'),
});

const Login = () => {
  const [isView, setIsView] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const loginApi = async (data) => {
    try {
      const response = await api.post('sessions', data);
      localStorage.setItem('@TokenKenzieHub', response.data.token);
      localStorage.setItem('@IdKenzieHub', response.data.user.id);
      toast.success('Login feito com sucesso!',{
        autoClose: 900,
      })
      navigate('/');
    } catch (error) {
      toast.error('Combinação incorreta de e-mail/senha', {
        autoClose: 3000,
      });
    }
  };
  return (
    <StyledLogin>
      <img src={logo} alt='Kenzie Hub' />
      <StyledSection>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(loginApi)}>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='text'
            placeholder='Digite aqui seu email'
            {...register('email')}
          />
          {errors.email && (
            <p>
              {errors.email.message}
              <IoMdInformationCircle />
            </p>
          )}
          <label htmlFor='password'>Senha</label>
          {isView ? (
            <div className='password'>
              <input
                id='password'
                type='text'
                placeholder='Digite aqui sua senha'
                {...register('password')}
              />
              <span onClick={() => setIsView(false)}>
                <FaEyeSlash />
              </span>
            </div>
          ) : (
            <div className='password'>
              <input
                id='password'
                type='password'
                placeholder='Digite aqui sua senha'
                {...register('password')}
              />
              <span onClick={() => setIsView(true)}>
                <FaEye />
              </span>
            </div>
          )}
          {errors.password && (
            <p>
              {errors.password.message}
              <IoMdInformationCircle />
            </p>
          )}
          <button type='submit'>Entrar</button>
        </form>
        <Link to='../register'>
          <p>Ainda não possui uma conta?</p>
          <div>Cadastre-se</div>
        </Link>
      </StyledSection>
    </StyledLogin>
  );
};

export default Login;
