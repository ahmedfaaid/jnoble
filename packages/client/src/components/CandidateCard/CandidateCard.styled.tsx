import styled from 'styled-components';
import { theme as t } from '../../styles/Theme';

export const Card = styled.div`
  width: 35rem;
  height: 18rem;
  margin: 2rem 5rem;
  padding: 1.5rem;
  background-color: ${t.colors.white[1]};
  border-radius: 1rem;
  box-shadow: ${t.shadow[1]};

  &:hover {
    box-shadow: ${t.shadow[2]};
    transform: translate3D(0, -1px, 0) scale(1.02);
    transition: transform 0.5s ease-in-out;
  }

  h3 {
    font-size: 2rem;
    color: ${t.colors.primary[1]};
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.2rem;
    color: ${t.colors.primary[2]};
    opacity: 0.7;

    &:not(:last-of-type) {
      margin-bottom: 0.5rem;
    }
  }
`;
