import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  StyledModalTech,
  StyledModalTechContainer,
  StyledModalTechMain,
} from '../style';
import { AiOutlineClose } from 'react-icons/ai';
import { TechContext } from '../../../../contexts/TechContext';
import { IoMdInformationCircle } from 'react-icons/io';
import { StyledButton } from '../../../../styles/button';

const schema = yup.object({
  title: yup.string().required('Nome é obrigatório'),
});

const EditTech = () => {
  const { tech, openModal, setOpenModal, techUpDate, techDelete } =
    useContext(TechContext);
  const { id, status, title } = tech;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
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
                    techUpDate(data, id);
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
                  {errors.title && (
                    <p>
                      {errors.title.message}
                      <IoMdInformationCircle />
                    </p>
                  )}
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
