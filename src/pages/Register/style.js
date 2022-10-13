import styled from 'styled-components';

export const StyledRegister = styled.div`
  display: flex;
  justify-content: center;

  .container {
    width: 90%;
    max-width: 369px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 40px 0;
  }

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      height: 16.9px;
    }
    @media (min-width: 768px) {
      img {
        height: 21.21px;
      }
    }

    .button {
      height: 31.95px;

      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 16px;

      background: var(--Color-grey-3);
      border-radius: 4px;

      font-weight: 600;
      font-size: 9.59px;
      color: var(--Color-grey-0);
    }

    @media (min-width: 768px) {
      .button {
        height: 40.11px;

        font-size: 12px;

        transition: 0.3s;

        &:hover {
          background-color: var(--Color-grey-2);

          transition: 0.3s;
        }
      }
    }
  }
`;

export const StyledSection = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px 0;

  background-color: var(--Color-grey-3);
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3.20867px;

  h2 {
    margin-top: 10px;
    font-weight: 700;
    font-size: 14.39px;
  }
  @media (min-width: 768px) {
    h2 {
      font-size: 18px;
    }
  }

  h3 {
    font-weight: 400;
    font-size: 9.59px;
    color: var(--Color-grey-1);
  }
  @media (min-width: 768px) {
    h3 {
      font-size: 12px;
    }
  }

  form {
    width: 90%;

    display: flex;
    flex-direction: column;
    gap: 5px;

    p {
      display: inline-flex;
      align-items: center;
      justify-content: flex-end;
      font-size: 10px;
      color: var(--Color-primary);
    }
  }

  label {
    font-weight: 400;
    font-size: 9.74px;
  }
  @media (min-width: 768px) {
    label {
      font-size: 12.182px;
    }
  }

  input,
  select {
    width: 100%;
    height: 38.38px;

    padding-left: 16px;

    background-color: var(--Color-grey-2);
    border: 0.973988px solid var(--Color-grey-2);
    border-radius: 3.19812px;

    font-weight: 400;
    font-size: 12.99px;
    color: var(--Color-grey-0);

    &::placeholder {
      color: var(--Color-grey-1);
    }
  }
  @media (min-width: 768px) {
    input {
      height: 48px;

      font-size: 16.2426px;
    }
  }

  a {
    width: 90%;

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    p {
      color: var(--Color-grey-1);
      font-weight: 600;
      font-size: 9.63px;
    }
    @media (min-width: 768px) {
      p {
        font-size: 12px;
      }
    }

    div {
      width: 100%;
      height: 48px;

      display: inline-flex;
      align-items: center;
      justify-content: center;

      background-color: var(--Color-grey-1);
      border: 1.2182px solid var(--Color-grey-1);
      border-radius: 4px;

      color: var(--Color-grey-0);
      font-weight: 500;
      font-size: 12.83px;
    }
    @media (min-width: 768px) {
      div {
        font-size: 16px;
      }
    }
  }
`;
