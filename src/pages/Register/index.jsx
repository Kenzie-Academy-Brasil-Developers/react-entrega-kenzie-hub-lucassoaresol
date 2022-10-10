import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { api } from '../../services/api';
import { StyledRegister, StyledSection } from './style';
import logo from '../../assets/logo.svg';

const schema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  email: yup
    .string()
    .email('Deve ser um e-mail válido')
    .required('Email é obrigatório'),
  password: yup
    .string()
    .matches(/.{6,}/, 'Deve ter no mínimo 6 digitos')
    .required('Senha é obrigatório'),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref('password')],
      'Confirmação de senha deve ser igual a senha'
    ),
  bio: yup.string().required('Bio é obrigatório'),
  contact: yup.string().required('Contato é obrigatório'),
});

const Register = () => {
  const navigate = useNavigate();
  const [isView, setIsView] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const postApi = async (data) => {
    const response = await api.post('users', data);
    navigate('/login');
  };
  return (
    <StyledRegister>
      <header>
        <img src={logo} alt="Kenzie Hub" />
        <Link to='../login'>Voltar</Link>
      </header>
      <StyledSection>
        <h2>Crie sua conta</h2>
        <h3>Rapido e grátis, vamos nessa</h3>
        <form onSubmit={handleSubmit(postApi)}>
          <label htmlFor='name'>Nome</label>
          <input
            id='name'
            type='text'
            placeholder='Digite aqui seu nome'
            {...register('name')}
          />
          <p>{errors.name?.message}</p>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='text'
            placeholder='Digite aqui seu email'
            {...register('email')}
          />
          <p>{errors.email?.message}</p>
          <label htmlFor='password'>Senha</label>
          {isView ? (
            <>
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
              <label htmlFor='confirmPassword'>Confirmar Senha</label>
              <input
                id='confirmPassword'
                type='text'
                placeholder='Digite aqui sua senha'
                {...register('confirmPassword')}
              />
            </>
          ) : (
            <>
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
              <label htmlFor='confirmPassword'>Confirmar Senha</label>
              <input
                id='confirmPassword'
                type='password'
                placeholder='Digite aqui sua senha'
                {...register('confirmPassword')}
              />
            </>
          )}
          <p>{errors.password?.message}</p>
          <p>{errors.confirmPassword?.message}</p>
          <label htmlFor='bio'>Bio</label>
          <input
            id='bio'
            type='text'
            placeholder='Fale sobre você'
            {...register('bio')}
          />
          <p>{errors.bio?.message}</p>
          <label htmlFor='contact'>Contato</label>
          <input
            id='contact'
            type='text'
            placeholder='Opção de contato'
            {...register('contact')}
          />
          <p>{errors.contact?.message}</p>
          <label htmlFor='course_module'>Selecionar módulo</label>
          <select id='course_module' {...register('course_module')}>
            <option value='Primeiro Módulo'>Primeiro Módulo</option>
            <option value='Segundo Módulo'>Segundo Módulo</option>
            <option value='Terceiro Módulo'>Terceiro Módulo</option>
          </select>
          <button type='submit'>Entrar</button>
        </form>
      </StyledSection>
    </StyledRegister>
  );
};

export default Register;
