import styled from 'styled-components';

export const StyledInputPassword = styled.div`
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
`;
