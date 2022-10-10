import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IoMdInformationCircle } from 'react-icons/io';
import { api } from '../../services/api';
import { StyledRegister, StyledSection } from './style';
import logo from '../../assets/logo.svg';
import { toast } from 'react-toastify';

const schema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  email: yup
    .string()
    .email('Deve ser um e-mail válido')
    .required('Email é obrigatório'),
  password: yup
    .string()
    .matches(/[A-Z]/, 'Deve conter ao menos 1 letra maiúscula')
    .matches(/[a-z]/, 'Deve conter ao menos 1 letra minuscula')
    .matches(/(\d)/, 'Deve conter ao menos um número')
    .matches(/(\W)|_/, 'Deve conter um caracter especial')
    .matches(/.{8,}/, 'Deve ter no minimo 8 digitos')
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
    try {
      await api.post('users', data);
      toast.success('Conta criada com sucesso!', {
        autoClose: 3000,
      });
      navigate('/login');
    } catch (error) {
      toast.error('O e-mail já existe', {
        autoClose: 3000,
      });
    }
  };
  return (
    <StyledRegister>
      <div className='container'>
        <header>
          <img src={logo} alt='Kenzie Hub' />
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
            {errors.name && (
              <p>
                {errors.name.message}
                <IoMdInformationCircle />
              </p>
            )}
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
            {errors.password && (
              <p>
                {errors.password.message}
                <IoMdInformationCircle />
              </p>
            )}
            {errors.confirmPassword && (
              <p>
                {errors.confirmPassword.message}
                <IoMdInformationCircle />
              </p>
            )}
            <label htmlFor='bio'>Bio</label>
            <input
              id='bio'
              type='text'
              placeholder='Fale sobre você'
              {...register('bio')}
            />
            {errors.bio && (
              <p>
                {errors.bio.message}
                <IoMdInformationCircle />
              </p>
            )}
            <label htmlFor='contact'>Contato</label>
            <input
              id='contact'
              type='text'
              placeholder='Opção de contato'
              {...register('contact')}
            />
            {errors.contact && (
              <p>
                {errors.contact.message}
                <IoMdInformationCircle />
              </p>
            )}
            <label htmlFor='course_module'>Selecionar módulo</label>
            <select id='course_module' {...register('course_module')}>
              <option value='Primeiro Módulo'>Primeiro Módulo</option>
              <option value='Segundo Módulo'>Segundo Módulo</option>
              <option value='Terceiro Módulo'>Terceiro Módulo</option>
            </select>
            <button type='submit'>Cadastrar</button>
          </form>
        </StyledSection>
      </div>
    </StyledRegister>
  );
};

export default Register;
