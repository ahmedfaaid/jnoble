import styled from 'styled-components';
import { theme as t } from '../../styles/Theme';

export const FormContainer = styled.div`
  padding: 4rem;
  background-color: ${t.colors.primary[2]};
  margin-bottom: 8rem;
  box-shadow: ${t.shadow[1]};
  width: 40rem;
  height: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 100%;
  }

  h2 {
    text-align: center;
    color: ${t.colors.white[1]};
    font-size: 2.5rem;
    font-weight: 600;
    letter-spacing: 1px;
  }

  div {
    margin-bottom: 2rem;

    input {
      width: 100%;
      padding: 1rem;
      border-radius: 0.5rem;
    }

    button {
      width: 100%;
      padding: 1rem;
      background-color: ${t.colors.primary[1]};
      color: ${t.colors.white[1]};
      font-size: 1.6rem;
      cursor: pointer;
      letter-spacing: 1px;
      transition: all 0.2s;

      &:hover {
        background-color: ${t.colors.white[1]};
        color: ${t.colors.primary[1]};
      }
    }

    p {
      text-align: center;
      color: ${t.colors.white[3]};
      font-size: 1.4rem;
      letter-spacing: 1px;

      a {
        color: ${t.colors.blue};
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export const InputLabel = styled.label`
  display: block;
  width: 100%;
  font-size: 1.6rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
  color: ${t.colors.white[1]};
  letter-spacing: 1px;
`;

export const RoleSelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;

  div {
    margin-bottom: 0;
  }

  input {
    display: none;
  }

  label {
    display: block;
    margin-left: 0;
    margin-bottom: 0;
    width: 15rem;
    background-color: ${t.colors.grey[2]};
    text-align: center;
    padding: 1.5rem 2.8rem;
    cursor: pointer;
    text-transform: uppercase;
    border: 2px solid transparent;
    border-radius: 0.5rem;
    font-size: 1.4rem;
    color: ${t.colors.white[1]};
    transition: all 0.1s;

    &:hover {
      border: 2px solid ${t.colors.primary[1]};
      color: ${t.colors.primary[1]};
    }
  }

  input[type='radio']:checked + label {
    background-color: ${t.colors.primary[1]};

    &:hover {
      color: ${t.colors.white[1]};
    }
  }

  input[type='radio']:focus + label {
    border: 1px solid ${t.colors.grey[3]};
  }
`;
