import styled, { css } from 'styled-components';

type ContainerProps = {
  loadingPage: boolean;
};

export const Container = styled.div<ContainerProps>`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  ${({ loadingPage }) =>
    !loadingPage &&
    css`
      visibility: visible;
      animation: fadeIn 0.5s;
    `}
`;
