import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { StyledLogin, StyledSection } from './style';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdInformationCircle } from 'react-icons/io';
import { api } from '../../services/api';
import logo from '../../assets/logo.svg';
import { toast } from 'react-toastify';
import InputPassword from '../../components/InputPassword';
import Loading from '../../components/Loading';

const schema = yup.object({
  email: yup
    .string()
    .email('Deve ser um e-mail válido')
    .required('Email é obrigatório'),
  password: yup.string().required('Senha é obrigatório'),
});

const Login = ({ setUser }) => {
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      const response = await api.post('sessions', data);
      localStorage.setItem('@TokenKenzieHub', response.data.token);
      setUser(response.data.user);
      toast.success('Login feito com sucesso!', {
        autoClose: 900,
      });
      navigate('/');
    } catch (error) {
      toast.error('Combinação incorreta de e-mail/senha', {
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
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
          <InputPassword register={register} />
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
      {loading && <Loading />}
    </StyledLogin>
  );
};

export default Login;
