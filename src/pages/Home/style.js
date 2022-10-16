import styled, { css } from 'styled-components';

export const StyledContainerMain = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 100%;
    height: 72px;

    display: flex;
    justify-content: center;

    border-bottom: 1px solid var(--Color-grey-3);

    img {
      height: 14.63px;
    }
  }

  main {
    width: 100%;

    margin-top: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-weight: 600;
      font-size: 16px;
    }

    button {
      font-size: 14px;
    }
  }
`;

export const StyledContainer = styled.div`
  width: 90%;
  height: 100%;

  @media (min-width: 768px) {
    width: 60%;
  }

  display: flex;

  ${({ position }) => {
    switch (position) {
      case 'header':
        return css`
          justify-content: space-between;
          align-items: center;
        `;

      case 'user':
        return css`
          flex-direction: column;
          justify-content: center;
          gap: 10px;

          @media (min-width: 768px) {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        `;

      default:
        return css`
          @media (min-width: 768px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 20px;
          }
        `;
    }
  }}
`;

export const StyledUser = styled.section`
  width: 100vw;
  height: 130px;

  display: flex;
  justify-content: center;

  border-bottom: 1px solid var(--Color-grey-3);

  h1 {
    font-weight: 700;
    font-size: 18px;
  }

  h2 {
    font-weight: 400;
    font-size: 12px;
    color: var(--Color-grey-1);
  }
`;

export const StyledTechs = styled.ul`
  width: 90%;

  @media (min-width: 768px) {
    width: 60%;
  }

  margin-top: 30px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  background-color: var(--Color-grey-3);
`;
