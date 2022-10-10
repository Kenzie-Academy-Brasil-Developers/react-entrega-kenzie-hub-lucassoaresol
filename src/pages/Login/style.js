import styled from 'styled-components';

export const StyledLogin = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  img {
    height: 14px;
  }
  @media (min-width: 768px) {
    img {
      height: 20px;
    }
  }
`;

export const StyledSection = styled.section`
  width: 90%;
  max-width: 369px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 30px 0;

  background-color: var(--Color-grey-3);
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3.20867px;

  h2 {
    font-weight: 700;
    font-size: 14.439px;
  }
  @media (min-width: 768px) {
    h2 {
      font-size: 18px;
    }
  }

  form {
    width: 90%;

    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  label {
    font-weight: 400;
    font-size: 9.772px;
  }
  @media (min-width: 768px) {
    label {
      font-size: 12.182px;
    }
  }

  input {
    width: 100%;
    height: 38.5px;

    padding-left: 16px;

    background-color: var(--Color-grey-2);
    border: 1.2182px solid var(--Color-grey-0);
    border-radius: 4px;

    font-weight: 400;
    font-size: 13.0293px;
    color: var(--Color-grey-0);
  }
  @media (min-width: 768px) {
    input {
      height: 48px;

      font-size: 16.2426px;
    }
  }

  button {
    height: 38.5px;

    background-color: var(--Color-primary);
    border: 1.2182px solid var(--Color-primary);
    border-radius: 4.06066px;

    font-weight: 500;
    font-size: 12.8347px;
    color: var(--Color-grey-0);
  }
  @media (min-width: 768px) {
    button {
      height: 48px;

      font-size: 16px;
    }
  }

  .password {
    position: relative;

    span {
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);

      font-size: 9.63px;
    }
    @media (min-width: 768px) {
      span {
        font-size: 12px;
      }
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
