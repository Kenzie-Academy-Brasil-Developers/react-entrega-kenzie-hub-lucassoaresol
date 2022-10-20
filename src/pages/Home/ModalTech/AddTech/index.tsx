import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AiOutlineClose } from 'react-icons/ai';
import { TechContext } from '../../../../contexts/TechContext';
import { StyledButton } from '../../../../styles/button';
import {
  StyledModalTech,
  StyledModalTechContainer,
  StyledModalTechMain,
} from '../style';
import ErrorsMessage from '../../../../components/ErrorsMessage';

const schema = yup.object({
  title: yup.string().required('Nome é obrigatório'),
});

const AddTech = () => {
  const { openModal, setOpenModal, techCreate } = useContext(TechContext);
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful, errors },
  } = useForm({ resolver: yupResolver(schema) });
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ title: '' });
    }
  }, [formState, reset]);
  return (
    <>
      {openModal && (
        <StyledModalTech>
          <StyledModalTechContainer>
            <header>
              <h1>Cadastrar Tecnologia</h1>
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
                <form onSubmit={handleSubmit((data) => techCreate(data))}>
                  <label htmlFor='title'>Nome</label>
                  <input
                    id='title'
                    type='text'
                    placeholder='Nome da tecnologia'
                    {...register('title')}
                  />
                  <ErrorsMessage errors={errors} id='title' />
                  <label htmlFor='status'>Selecionar status</label>
                  <select id='status' {...register('status')}>
                    <option value='Iniciante'>Iniciante</option>
                    <option value='Intermediário'>Intermediário</option>
                    <option value='Avançado'>Avançado</option>
                  </select>
                  <StyledButton type='submit'>
                    Cadastrar Tecnologia
                  </StyledButton>
                </form>
              </main>
            </StyledModalTechMain>
          </StyledModalTechContainer>
        </StyledModalTech>
      )}
    </>
  );
};

export default AddTech;
