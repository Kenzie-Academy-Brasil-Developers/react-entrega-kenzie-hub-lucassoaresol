import React, { useContext } from 'react';
import { TechContext } from '../../../contexts/TechContext';
import AddTech from './AddTech';
import EditTech from './EditTech';

const ModalTech = () => {
  const { openModal, typeModal } = useContext(TechContext);
  return openModal && typeModal ? <AddTech /> : <EditTech />;
};

export default ModalTech;
