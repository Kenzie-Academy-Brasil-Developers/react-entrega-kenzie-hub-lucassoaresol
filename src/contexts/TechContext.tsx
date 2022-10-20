import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { ipostTechsProps, postTechs } from '../services/postTechs';
import { UserContext } from './UserContext';

interface iTechContextProps{
  children: ReactNode;
}

interface iTechContext{
  tech: {
    id: string;
    status: string;
    title: string;
};
  setTech: Dispatch<SetStateAction<{
    id: string;
    status: string;
    title: string;
}>>;
  openModal: boolean | undefined;
  setOpenModal: Dispatch<SetStateAction<boolean | undefined>>;
  typeModal: boolean | undefined;
  setTypeModal: Dispatch<SetStateAction<boolean | undefined>>;
  techCreate: (data: any) => Promise<void>;
  techUpDate: (data: any, id: any) => Promise<void>;
  techDelete: (id: any) => Promise<void>;
}

export const TechContext = createContext({} as iTechContext);

const TechProvider = ({ children }:iTechContextProps) => {
  const [openModal, setOpenModal] = useState<boolean>();
  const [typeModal, setTypeModal] = useState<boolean>();
  const [tech, setTech] = useState({ id: '', status: '', title: '' });
  const { techList, setTechList } = useContext(UserContext);
  const techCreate = async (data:ipostTechsProps) => {
    try {
      const response = await postTechs(data);
      toast.success('Tecnologia criada com sucesso!', {
        autoClose: 2000,
      });
      setOpenModal(false);
      setTechList([...techList, response]);
    } catch (error) {
      toast.error('A Tecnologia já existe', {
        autoClose: 3000,
      });
    }
  };
  const techUpDate = async (data:ipostTechsProps, id:string) => {
    try {
      const { data: response } = await api.put(`users/techs/${id}`, data);
      const filtered = techList.filter((el:any) => el.id != response.id);
      setTechList([...filtered, response]);
      toast.success('Tecnologia alterada com sucesso!', {
        autoClose: 2000,
      });
      setOpenModal(false);
    } catch (error) {
      console.error(error);
    }
  };
  const techDelete = async (id:string) => {
    try {
      await api.delete(`users/techs/${id}`);
      const filtered = techList.filter((el:any) => el.id != id);
      setTechList(filtered);
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
