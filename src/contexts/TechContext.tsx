import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { postTechs, putTechs } from '../services/apiTechs';
import { UserContext } from './UserContext';

interface iTechContextProps {
  children: ReactNode;
}

interface iTechContext {
  tech: {
    id: string;
    status: string;
    title: string;
  };
  setTech: Dispatch<
    SetStateAction<{
      id: string;
      status: string;
      title: string;
    }>
  >;
  openModal: boolean | undefined;
  setOpenModal: Dispatch<SetStateAction<boolean | undefined>>;
  typeModal: boolean | undefined;
  setTypeModal: Dispatch<SetStateAction<boolean | undefined>>;
  techCreate: (data: FieldValues) => Promise<void>;
  techUpDate: (data: FieldValues, id: string) => Promise<void>;
  techDelete: (id: string) => Promise<void>;
}

export const TechContext = createContext({} as iTechContext);

const TechProvider = ({ children }: iTechContextProps) => {
  const [openModal, setOpenModal] = useState<boolean>();
  const [typeModal, setTypeModal] = useState<boolean>();
  const [tech, setTech] = useState({ id: '', status: '', title: '' });
  const { userAutoLogin } = useContext(UserContext);
  const techCreate = async (data: FieldValues) => {
    try {
      await postTechs(data);
      toast.success('Tecnologia criada com sucesso!', {
        autoClose: 2000,
      });
      setOpenModal(false);
      userAutoLogin();
    } catch (error) {
      toast.error('A Tecnologia já existe', {
        autoClose: 3000,
      });
    }
  };
  const techUpDate = async (data: FieldValues, id: string) => {
    try {
      await putTechs(data, id);
      userAutoLogin();
      toast.success('Tecnologia alterada com sucesso!', {
        autoClose: 2000,
      });
      setOpenModal(false);
    } catch (error) {
      console.error(error);
    }
  };
  const techDelete = async (id: string) => {
    try {
      await api.delete(`users/techs/${id}`);
      userAutoLogin();
      toast.success('Tecnologia deletada com sucesso!', {
        autoClose: 2000,
      });
      setOpenModal(false);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <TechContext.Provider
      value={{
        tech,
        setTech,
        openModal,
        setOpenModal,
        typeModal,
        setTypeModal,
        techCreate,
        techUpDate,
        techDelete,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
