import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  height: 38.5px;
  margin-top: 10px;

  font-weight: 500;
  font-size: 12px;
  color: var(--Color-grey-0);

  @media (min-width: 768px) {
    height: 48px;

    font-size: 16px;

    transition: 0.3s;
  }

  border-radius: 4px;
  border: 1px solid var(--Color-primary);
  ${({ location }) => {
    switch (location) {
      case 'home':
        return css`
          height: 32px;
          margin-top: 0;
          padding: 0 16px;

          background-color: var(--Color-grey-3);
          border-color: var(--Color-grey-3);

          font-weight: 600;

          @media (min-width: 768px) {
            height: 32px;

            font-size: 12px;

            &:hover {
              background-color: var(--Color-grey-2);
              border-color: var(--Color-grey-2);

              transition: 0.3s;
            }
          }
        `;
      case 'register':
        return css`
          background-color: var(--Color-primary-Negative);
          border-color: var(--Color-primary-Negative);

          @media (min-width: 768px) {
            &:hover {
              background-color: var(--Color-primary);
              border-color: var(--Color-primary);

              transition: 0.3s;
            }
          }
        `;

      default:
        return css`
          background-color: var(--Color-primary);

          @media (min-width: 768px) {
            &:hover {
              background-color: var(--Color-primary-Focus);
              border-color: var(--Color-primary-Focus);

              transition: 0.3s;
            }
          }
        `;
    }
  }}
`;
