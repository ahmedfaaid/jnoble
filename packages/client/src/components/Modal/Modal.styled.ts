import styled from 'styled-components';
import { theme as t } from '../../styles/Theme';

interface IWrapper {
  open: boolean;
}

export const Wrapper = styled.div<IWrapper>`
  ${props => {
    if (props.open) {
      return `
        display: flex;
      `;
    } else {
      return `
        display: none;
      `;
    }
  }}
  justify-content: center;
  align-items: center;
  z-index: 5;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(${t.colors.primary[4]}, 0.5);
`;

export const Card = styled.div`
  width: 60rem;
  height: 60rem;
  background-color: ${t.colors.white[2]};
  z-index: 10;
`;
