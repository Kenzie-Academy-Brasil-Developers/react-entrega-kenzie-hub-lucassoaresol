import { createContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [globalLoading, setGlobalLoading] = useState();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [techList, setTechList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('@TokenKenzieHub');
      if (token) {
        try {
          setGlobalLoading(true);
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get('profile');
          setUser(data);
          setTechList(data.techs);
        } catch (error) {
          console.error(error);
          setLoading(false);
        } finally {
          setGlobalLoading(false);
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    })();
  }, []);

  const userLogin = async (data) => {
    try {
      setGlobalLoading(true);
      const {
        data: { token, user },
      } = await api.post('sessions', data);
      localStorage.setItem('@TokenKenzieHub', token);
      api.defaults.headers.authorization = `Bearer ${token}`;
      setUser(user);
      setTechList(user.techs);
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
      setGlobalLoading(false);
    }
  };

  const userLogout = () => {
    localStorage.removeItem('@TokenKenzieHub');
    setUser(null);
    setTechList([]);
    navigate('/login', {
      replace: true,
    });
  };

  const userRegister = async (data) => {
    try {
      setGlobalLoading(true);
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
      setGlobalLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        userLogin,
        userLogout,
        userRegister,
        user,
        techList,
        setTechList,
        globalLoading,
        setGlobalLoading,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
