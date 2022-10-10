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

    button {
      height: 32px;

      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 16px;

      background-color: var(--Color-grey-3);
      border-radius: 4px;

      font-weight: 600;
      font-size: 12px;
      color: var(--Color-grey-0);
    }

    @media (min-width: 768px) {
      button {
        transition: 0.3s;

        &:hover {
          background-color: var(--Color-grey-2);
          border-color: var(--Color-grey-2);

          transition: 0.3s;
        }
      }
    }
  }

  main {
    width: 100%;

    display: flex;
    justify-content: center;
    margin-top: 30px;

    h3 {
      font-weight: 700;
      font-size: 18px;
    }

    h4 {
      font-weight: 400;
      font-size: 16px;
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
          display: none;
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