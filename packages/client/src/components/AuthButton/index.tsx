import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme as t } from '../../styles/theme';

interface AuthButtonProps {
  name: string;
}

const ButtonLink = styled(Link)`
  display: inline-block;

  :not(:last-of-type) {
    margin-right: 3rem;
  }
`;

const StyledAuthButton = styled.a<AuthButtonProps>`
  padding: 0.5rem 1.3rem;
  border-radius: 0.5rem;
  border: ${props =>
    props.name === 'login'
      ? '1px solid ' + t.colors.white
      : '1px solid transparent'};
  color: ${t.colors.white};
  background-color: ${props =>
    props.name === 'login' ? t.colors.black : t.colors.blue};
  font-size: 1.6rem;
  transition: all ease-in-out 0.2s;

  &:hover {
    background-color: ${props =>
      props.name === 'login' ? t.colors.white : t.colors.primaryColor};
    color: ${props =>
      props.name === 'login' ? t.colors.black : t.colors.white};
  }
`;

function AuthButton({ name }: AuthButtonProps) {
  return (
    <ButtonLink to={`/${name}`}>
      <StyledAuthButton name={name}>{name.toUpperCase()}</StyledAuthButton>
    </ButtonLink>
  );
}

export default AuthButton;
