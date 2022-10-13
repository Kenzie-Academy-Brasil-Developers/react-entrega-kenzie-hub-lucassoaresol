import React, { createContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const StartContext = createContext();

const StartProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [isGoToken, setIsGoToken] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('@TokenKenzieHub');
      if (token) {
        try {
          setLoading(true);
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get('profile');
          setUser(data);
          setIsGoToken(false);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      } else {
        setIsGoToken(false);
      }
    };
    loadUser();
  }, []);

  const login = async (data) => {
    try {
      setLoading(true);
      const response = await api.post('sessions', data);
      const token = response.data.token;
      localStorage.setItem('@TokenKenzieHub', token);
      api.defaults.headers.authorization = `Bearer ${token}`;
      setUser(response.data.user);
      setIsGoToken(false);
      toast.success('Login feito com sucesso!', {
        autoClose: 900,
      });
      navigate('/', {
        replace: true,
      });
    } catch (error) {
      console.error(error);
      toast.error('Combinação incorreta de e-mail/senha', {
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const createUser = async (data) => {
    try {
      setLoading(true);
      await api.post('users', data);
      toast.success('Conta criada com sucesso!', {
        autoClose: 3000,
      });
      navigate('/login');
    } catch (error) {
      toast.error('O e-mail já existe', {
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <StartContext.Provider
      value={{
        loading,
        login,
        createUser,
        user,
        navigate,
        isGoToken,
      }}
    >
      {children}
    </StartContext.Provider>
  );
};

export default StartProvider;
