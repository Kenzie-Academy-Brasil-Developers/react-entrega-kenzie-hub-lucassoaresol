import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  StyledModalTech,
  StyledModalTechContainer,
  StyledModalTechMain,
} from '../style';
import { AiOutlineClose } from 'react-icons/ai';
import { TechContext } from '../../../../contexts/TechContext';
import { StyledButton } from '../../../../styles/button';

const EditTech = () => {
  const { tech, openModal, setOpenModal, techUpDate, techDelete } =
    useContext(TechContext);
  const [isUpDate, setIsUpDate] = useState(true);
  const { id, status, title } = tech;
  const { register, handleSubmit, reset } = useForm();
  useEffect(() => {
    reset({ title: `${title}`, status: `${status}` });
  }, [tech]);
  return (
    <>
      {openModal && (
        <StyledModalTech>
          <StyledModalTechContainer>
            <header>
              <h1>Tecnologia Detalhes</h1>
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                <AiOutlineClose />
              </button>
            </header>
            <StyledModalTechMain>
              <main>
                <form
                  onSubmit={handleSubmit((data) => {
                    if (isUpDate) {
                      techUpDate(data, id);
                    }
                  })}
                >
                  <label htmlFor='title'>Nome</label>
                  <input
                    readOnly
                    id='title'
                    type='text'
                    placeholder='Nome da tecnologia'
                    {...register('title')}
                  />
                  <label htmlFor='status'>Selecionar status</label>
                  <select id='status' {...register('status')}>
                    <option value='Iniciante'>Iniciante</option>
                    <option value='Intermediário'>Intermediário</option>
                    <option value='Avançado'>Avançado</option>
                  </select>
                  <div>
                    <StyledButton location='register' type='submit'>
                      Salvar alterações
                    </StyledButton>
                    <StyledButton
                      location='delete'
                      onClick={() => {
                        setIsUpDate(false);
                        techDelete(id);
                      }}
                    >
                      Excluir
                    </StyledButton>
                  </div>
                </form>
              </main>
            </StyledModalTechMain>
          </StyledModalTechContainer>
        </StyledModalTech>
      )}
    </>
  );
};

export default EditTech;
