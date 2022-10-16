import styled from 'styled-components';

export const StyledTechsCard = styled.li`
  width: 100%;
  height: 48.73px;
  padding: 0 12px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--Color-grey-4);
  border-radius: 4.06px;

  cursor: pointer;

  h1 {
    font-weight: 700;
    font-size: 14.21px;
  }

  h2 {
    font-weight: 400;
    font-size: 12.18px;
    color: var(--Color-grey-1);
  }

  @media (min-width: 768px) {
    padding: 0 20px;

    transition: 0.3s;
    &:hover {
      background-color: var(--Color-grey-2);

      transition: 0.3s;

      h2 {
        color: var(--Color-grey-0);
      }
    }
  }
`;
