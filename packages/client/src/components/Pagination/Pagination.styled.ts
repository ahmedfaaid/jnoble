import styled from 'styled-components';
import { theme as t } from '../../styles/Theme';

export const Paginate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;

  button {
    display: inline-block;
    font-size: 2rem;
    padding: 1rem 1.5rem;
    margin: 0 2rem;
    width: 10rem;
    background-color: ${t.colors.primary[2]};
    color: ${t.colors.white[1]};
    border-radius: 1rem;
    transition: all 0.1s ease-in;
    box-shadow: ${t.shadow[2]};
    cursor: pointer;

    &:hover {
      background-color: ${t.colors.primary[3]};
    }

    &:disabled {
      background-color: ${t.colors.primary[2]};
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  p {
    font-size: 1.6rem;
  }
`;
