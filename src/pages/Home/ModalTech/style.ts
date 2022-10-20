import styled from 'styled-components';

export const StyledModalTech = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.4);

  color: var(--Color-grey-0);

  header {
    height: 40px;
    padding: 0 16px;

    @media (min-width: 768px) {
      height: 50px;
    }

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--Color-grey-2);

    h1 {
      font-weight: 700;
      font-size: 11.23px;
    }

    @media (min-width: 768px) {
      h1 {
        font-size: 14px;
      }
    }

    button {
      font-weight: 600;
      font-size: 12.83px;
      color: var(--Color-grey-0);
    }

    @media (min-width: 768px) {
      button {
        font-size: 16px;
      }
    }
  }
`;

export const StyledModalTechContainer = styled.div`
  width: 90%;
  height: 290px;
  max-width: 369px;
  margin-top: 150px;

  @media (min-width: 768px) {
    height: 340px;
    margin-top: 190px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--Color-grey-3);
`;

export const StyledModalTechMain = styled.div`
  width: 100%;
  padding: 20px 18px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--Color-grey-3);

  main {
    margin-top: 0;
    form {
      width: 100%;

      display: flex;
      flex-direction: column;
      gap: 10px;

      p {
        display: inline-flex;
        align-items: center;
        justify-content: flex-end;
        font-size: 10px;
        color: var(--Color-primary);
      }

      input,
      select {
        width: 100%;
        height: 38.5px;

        padding-left: 13px;

        background-color: var(--Color-grey-2);
        border: 0.973988px solid var(--Color-grey-2);
        border-radius: 3.19812px;

        font-weight: 400;
        font-size: 13.03px;
        color: var(--Color-grey-0);

        &::placeholder {
          color: var(--Color-grey-1);
        }
      }
      div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button:first-child {
          width: 60%;
        }
        button:last-child {
          width: 30%;
        }
        
      }
      @media (min-width: 768px) {
        input,
        select {
          height: 48px;

          font-size: 16.24px;
        }
      }
    }

    label {
      font-weight: 400;
      font-size: 9.77px;
    }
    @media (min-width: 768px) {
      label {
        font-size: 12.18px;
      }
    }
  }
`;
