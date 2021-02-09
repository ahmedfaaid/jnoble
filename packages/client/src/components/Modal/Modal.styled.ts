import styled from 'styled-components';
import { theme as t } from '../../styles/Theme';

interface IWrapper {
  open: boolean;
}

interface IButton {
  variant?: string;
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
  min-height: 150rem;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(${t.colors.primary[4]}, 0.5);
`;

export const Card = styled.div`
  width: 100rem;
  padding: 2rem;
  background-color: ${t.colors.white[1]};
  z-index: 10;
  position: relative;
  color: ${t.colors.primary[2]};
`;

export const ImageContainer = styled.div`
  width: 10rem;
  height: 10rem;
  margin: 3rem auto 2rem;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: ${t.shadow[1]};

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const FieldSection = styled.div`
  width: 80%;
  margin: 5rem auto 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AltField = styled.div`
  width: 100%;

  &:not(:last-of-type) {
    margin-right: 2rem;
  }

  label {
    display: block;
    margin-left: 1rem;
    font-size: 1.4rem;
  }
`;

export const List = styled.ul`
  margin-left: 1rem;
  margin-top: 1rem;
  list-style: none;

  li {
    background-color: ${t.colors.primary[2]};
    color: ${t.colors.white[1]};
    width: max-content;
    padding: 1rem;
    font-size: 1.2rem;
    display: inline-block;

    &:not(:last-of-type) {
      margin-right: 1rem;
    }
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin: 5rem 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button<IButton>`
  width: 8rem;
  padding: 1.2rem 0.8rem;
  color: ${t.colors.white[1]};
  font-size: 1.8rem;
  border-radius: 1rem;
  ${props => {
    switch (props.variant) {
      case 'red':
        return `
          background-color: ${t.colors.red[1]};
        `;
      case 'blue':
        return `
          background-color: ${t.colors.blue};
        `;
      default:
        return `
          background-color: ${t.colors.primary[2]};
        `;
    }
  }}

  &:not(:last-of-type) {
    margin-right: 5rem;
  }

  &:hover {
    cursor: pointer;
    ${props => {
      switch (props.variant) {
        case 'red':
          return `
          background-color: ${t.colors.red[2]};
        `;
        case 'blue':
          return `
          background-color: ${t.colors.primary[3]};
        `;
        default:
          return `
          background-color: ${t.colors.primary[1]};
        `;
      }
    }}
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:disabled:hover {
    ${props => {
      switch (props.variant) {
        case 'red':
          return `
          background-color: ${t.colors.red[1]};
        `;
        case 'blue':
          return `
          background-color: ${t.colors.blue};
        `;
        default:
          return `
          background-color: ${t.colors.primary[2]};
        `;
      }
    }}
  }
`;
