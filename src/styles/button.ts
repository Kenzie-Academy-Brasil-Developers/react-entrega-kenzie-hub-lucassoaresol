import styled, { css } from 'styled-components';

interface iButtonProps {
  location?: 'register' | 'delete' | 'tech';
}

export const StyledButton = styled.button<iButtonProps>`
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

  background-color: var(--Color-primary);
  border: 1px solid var(--Color-primary);
  border-radius: 4px;

  ${({ location }) => {
    switch (location) {
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
      case 'delete':
        return css`
          background-color: var(--Color-grey-1);
          border-color: var(--Color-grey-1);

          @media (min-width: 768px) {
            &:hover {
              background-color: var(--Color-grey-2);
              border-color: var(--Color-grey-2);

              transition: 0.3s;
            }
          }
        `;

      default:
        return css`
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
export const StyledButtonHome = styled.button<iButtonProps>`
  height: 32px;

  background-color: var(--Color-grey-3);
  border-color: var(--Color-grey-3);
  border-radius: 4px;

  font-weight: 600;
  font-size: 12px;
  color: var(--Color-grey-0);

  transition: 0.3s;

  @media (min-width: 768px) {
    &:hover {
      background-color: var(--Color-grey-2);
      border-color: var(--Color-grey-2);

      transition: 0.3s;
    }
  }

  ${({ location }) => {
    switch (location) {
      case 'tech':
        return css`
          width: 32px;
        `;

      default:
        return css`
          padding: 0 16px;
        `;
    }
  }}
`;
