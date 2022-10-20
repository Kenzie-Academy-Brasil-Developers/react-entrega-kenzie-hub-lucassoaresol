import { createContext, ReactNode, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { getUser, igetUser, ipostUser, postUser, postUserCreate } from '../services/apiUser';
import { ipostTechs } from '../services/apiTechs';
import { FieldValues } from 'react-hook-form';

interface iUserContextProps{
  children: ReactNode;
}

interface iUserContext{
  userAutoLogin: () => Promise<void>;
  userLogin: (data: FieldValues) => Promise<void>;
  userLogout: () => void;
  userRegister: (data: FieldValues) => void;
  user: igetUser | null;
  techList: ipostTechs[];
  globalLoading: boolean | undefined;
  loading: boolean;
}

export const UserContext = createContext({} as iUserContext);

const UserProvider = ({ children }:iUserContextProps) => {
  const [globalLoading, setGlobalLoading] = useState<boolean>();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<igetUser | null>(null);
  const [techList, setTechList] = useState([] as ipostTechs[]);
  const navigate = useNavigate();

  useEffect(() => {
    userAutoLogin();
  }, []);

  const userAutoLogin = async () => {
    const token = localStorage.getItem('@TokenKenzieHub');
      if (token) {
        try {
          setGlobalLoading(true);
          const user = await getUser(token);
          setUser(user);
          setTechList(user.techs);
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
  };

  const userLogin = async (data:FieldValues) => {
    try {
      setGlobalLoading(true);
      const {token, user}:ipostUser = await postUser(data)
      localStorage.setItem('@TokenKenzieHub', token);
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

  const userRegister = async (data:FieldValues) => {
    try {
      setGlobalLoading(true);
      await postUserCreate(data)
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
        userAutoLogin,
        userLogin,
        userLogout,
        userRegister,
        user,
        techList,
        globalLoading,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
