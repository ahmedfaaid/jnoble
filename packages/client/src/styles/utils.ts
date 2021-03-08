import styled from 'styled-components';
import { theme as t } from './Theme';

interface ILoadingProps {
  location?: string;
}

export const LoadingWrapper = styled.div<ILoadingProps>`
  width: 100%;
  ${props => {
    switch (props.location) {
      case 'modal':
        return `
          height: 100rem;
        `;
      default:
        return `
          height: 70rem;
        `;
    }
  }}
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled.div<ILoadingProps>`
  display: block;
  width: 20rem;
  height: 20rem;
  margin: auto;

  &:after {
    content: ' ';
    display: block;
    width: 18rem;
    height: 18rem;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${t.colors.primary[1]};
    border-color: ${t.colors.primary[1]} transparent ${t.colors.primary[1]}
      transparent;

    ${props => {
      switch (props.location) {
        case 'login':
          return `
            border: 6px solid ${t.colors.white[1]};
            border-color: ${t.colors.white[1]} transparent ${t.colors.white[1]}
              transparent;
          `;
        default:
          return `
            border: 6px solid ${t.colors.primary[1]};
            border-color: ${t.colors.primary[1]} transparent ${t.colors.primary[1]}
              transparent;
          `;
      }
    }}
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
