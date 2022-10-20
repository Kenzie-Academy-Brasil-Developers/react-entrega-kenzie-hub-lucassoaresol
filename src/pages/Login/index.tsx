import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { StyledLogin, StyledSection } from './style';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import InputPassword from '../../components/InputPassword';
import { StyledButton } from '../../styles/button';
import { UserContext } from '../../contexts/UserContext';
import Loading from '../../components/Loading';
import ErrorsMessage from '../../components/ErrorsMessage';

const schema = yup.object({
  email: yup.string().required('Email é obrigatório'),
  password: yup.string().required('Senha é obrigatório'),
});

const Login = () => {
  const { userLogin } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <StyledLogin>
      <Link to='/login'>
        <img src={logo} alt='Kenzie Hub' />
      </Link>
      <StyledSection>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(userLogin)}>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='text'
            placeholder='Digite aqui seu email'
            {...register('email')}
          />
          <ErrorsMessage errors={errors} id='email' />
          <InputPassword register={register} />
          <ErrorsMessage errors={errors} id='password' />
          <StyledButton type='submit'>Entrar</StyledButton>
        </form>
        <Link to='../register'>
          <p>Ainda não possui uma conta?</p>
          <div>Cadastre-se</div>
        </Link>
      </StyledSection>
      <Loading />
    </StyledLogin>
  );
};

export default Login;
