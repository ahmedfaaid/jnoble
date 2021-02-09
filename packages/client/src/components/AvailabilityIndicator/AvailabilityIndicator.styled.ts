import styled, { keyframes } from 'styled-components';
import { theme as t } from '../../styles/Theme';

interface IIndicatorProps {
  available: boolean;
}

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
  }
  100% {
    box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
  }
`;

export const Indicator = styled.div<IIndicatorProps>`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: 2rem;
  right: 2rem;
  ${props => {
    if (props.available) {
      return `
        background-color: ${t.colors.green};
      `;
    } else {
      return `
        background-color: ${t.colors.red[1]};
      `;
    }
  }}
  border-radius: 50%;
  animation: ${pulse} 2s infinite;
`;
