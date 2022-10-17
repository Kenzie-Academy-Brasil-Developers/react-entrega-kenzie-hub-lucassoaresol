import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { UserContext } from './UserContext';

export const TechContext = createContext();

const TechProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState();
  const [typeModal, setTypeModal] = useState();
  const [tech, setTech] = useState({ id: '', status: '', title: '' });
  const { techList, setTechList } = useContext(UserContext);
  const techCreate = async (data) => {
    try {
      const { data: response } = await api.post('users/techs', data);
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
  const techUpDate = async (data, id) => {
    try {
      const { data: response } = await api.put(`users/techs/${id}`, data);
      const filtered = techList.filter((el) => el.id != response.id);
      setTechList([...filtered, response]);
      toast.success('Tecnologia alterada com sucesso!', {
        autoClose: 2000,
      });
      setOpenModal(false);
    } catch (error) {
      console.error(error);
    }
  };
  const techDelete = async (id) => {
    try {
      await api.delete(`users/techs/${id}`);
      const filtered = techList.filter((el) => el.id != id);
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
