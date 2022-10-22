import { useContext } from 'react';
import { TechContext } from '../../../contexts/TechContext';
import { StyledTechsCard } from './style';

interface iTechsCardProps {
  tech: {
    id: string;
    title: string;
    status: string;
  };
}

const TechsCard = ({ tech }: iTechsCardProps) => {
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
