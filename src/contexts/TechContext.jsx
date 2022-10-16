import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';

export const TechContext = createContext();

const TechProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState();
  const [typeModal, setTypeModal] = useState();
  const [tech, setTech] = useState({ id: '', status: '', title: '' });
  const techCreate = async (data) => {
    try {
      await api.post('users/techs', data);
      toast.success('Tecnologia criada com sucesso!', {
        autoClose: 2000,
      });
      setOpenModal(false);
    } catch (error) {
      toast.error('A Tecnologia já existe', {
        autoClose: 3000,
      });
    }
  };
  const techUpDate = async (data, id) => {
    try {
      await api.put(`users/techs/${id}`, data);
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
