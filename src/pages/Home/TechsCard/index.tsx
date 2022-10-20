import React, { useContext } from 'react';
import { TechContext } from '../../../contexts/TechContext';
import { StyledTechsCard } from './style';

const TechsCard = ({ tech }:any) => {
  const { setTech, setOpenModal, setTypeModal } = useContext(TechContext);
  const { status, title } = tech;
  return (
    <>
      <StyledTechsCard
        onClick={() => {
          setOpenModal(true);
          setTypeModal(false);
          setTech(tech);
        }}
      >
        <h1>{title}</h1>
        <h2>{status}</h2>
      </StyledTechsCard>
    </>
  );
};

export default TechsCard;
