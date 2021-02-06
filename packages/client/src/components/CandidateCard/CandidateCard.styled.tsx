import styled from 'styled-components';
import { theme as t } from '../../styles/Theme';

export const Card = styled.div`
  width: 38rem;
  height: 20rem;
  margin: 2rem 3.5rem;
  padding: 1.5rem;
  background-color: ${t.colors.white[1]};
  border-radius: 1rem;
  box-shadow: ${t.shadow[1]};
  position: relative;

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

  input {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 3rem;
    height: 3rem;
    appearance: none;
    background-color: ${t.colors.grey[3]};
    cursor: pointer;
    border-bottom-right-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    transition: all 0.1s ease-in;

    &:hover {
      background-color: ${t.colors.grey[2]};
    }

    &::after {
      display: none;
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      font-size: 2.5rem;
      color: ${t.colors.white[1]};
      content: '\f00c';
    }

    &:checked {
      background-color: ${t.colors.primary[1]};
    }

    &:checked::after {
      display: block;
    }
  }
`;
