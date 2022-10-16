import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { IoMdInformationCircle } from 'react-icons/io';
import { StyledRegister, StyledSection } from './style';
import logo from '../../assets/logo.svg';
import InputPassword from '../../components/InputPassword';
import { StyledButton } from '../../styles/button';
import { UserContext } from '../../contexts/UserContext';
import Loading from '../../components/Loading';

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
  const { userRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <StyledRegister>
      <div className='container'>
        <header>
          <Link to='/login'>
            <img src={logo} alt='Kenzie Hub' />
          </Link>
          <Link className='button' to='../login'>
            Voltar
          </Link>
        </header>
        <StyledSection>
          <h2>Crie sua conta</h2>
          <h3>Rapido e grátis, vamos nessa</h3>
          <form onSubmit={handleSubmit(userRegister)}>
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
            <InputPassword register={register} isConfirm={true} />
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
            <StyledButton location='register' type='submit'>
              Cadastrar
            </StyledButton>
          </form>
        </StyledSection>
      </div>
      <Loading />
    </StyledRegister>
  );
};

export default Register;
