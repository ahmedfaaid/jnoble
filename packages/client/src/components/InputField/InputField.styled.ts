import styled from 'styled-components';
import { theme as t } from '../../styles/Theme';

export const Field = styled.div`
  width: 100%;

  &:not(:last-of-type) {
    margin-right: 2rem;
  }

  label {
    display: block;
    margin-left: 1rem;
    font-size: 1.4rem;
  }

  input,
  select {
    display: block;
    width: 100%;
    height: 5rem;
    margin-top: 1rem;
    padding: 1rem;
    background-color: ${t.colors.white[2]};
    border-radius: 0.5rem;
    color: ${t.colors.primary[1]};
  }
`;
