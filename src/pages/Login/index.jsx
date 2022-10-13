import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { StyledLogin, StyledSection } from './style';
import { Link } from 'react-router-dom';
import { IoMdInformationCircle } from 'react-icons/io';
import logo from '../../assets/logo.svg';
import InputPassword from '../../components/InputPassword';
import Loading from '../../components/Loading';
import { StyledButton } from '../../styles/button';
import { StartContext } from '../../contexts/StartContext';

const schema = yup.object({
  email: yup.string().required('Email é obrigatório'),
  password: yup.string().required('Senha é obrigatório'),
});

const Login = () => {
  const { loading, login } = useContext(StartContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <StyledLogin>
      <img src={logo} alt='Kenzie Hub' />
      <StyledSection>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(login)}>
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
          <InputPassword register={register} />
          {errors.password && (
            <p>
              {errors.password.message}
              <IoMdInformationCircle />
            </p>
          )}
          <StyledButton type='submit'>Entrar</StyledButton>
        </form>
        <Link to='../register'>
          <p>Ainda não possui uma conta?</p>
          <div>Cadastre-se</div>
        </Link>
      </StyledSection>
      {loading && <Loading />}
    </StyledLogin>
  );
};

export default Login;
