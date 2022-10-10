import React, { useState } from 'react';
import { StyledInputPassword } from './style';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const InputPassword = ({ register, isConfirm }) => {
  const [isView, setIsView] = useState(false);
  return (
    <>
      <label htmlFor='password'>Senha</label>
      <StyledInputPassword>
        {isView ? (
          <>
            <input
              id='password'
              type='text'
              placeholder='Digite aqui sua senha'
              {...register('password')}
            />
            <span onClick={() => setIsView(false)}>
              <FaEyeSlash />
            </span>
          </>
        ) : (
          <>
            <input
              id='password'
              type='password'
              placeholder='Digite aqui sua senha'
              {...register('password')}
            />
            <span onClick={() => setIsView(true)}>
              <FaEye />
            </span>
          </>
        )}
      </StyledInputPassword>
      {isConfirm && (
        <>
          <label htmlFor='confirmPassword'>Confirmar Senha</label>
          {isView ? (
            <input
              id='confirmPassword'
              type='text'
              placeholder='Digite aqui sua senha'
              {...register('confirmPassword')}
            />
          ) : (
            <input
              id='confirmPassword'
              type='password'
              placeholder='Digite aqui sua senha'
              {...register('confirmPassword')}
            />
          )}
        </>
      )}
    </>
  );
};

export default InputPassword;
