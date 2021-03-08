import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme as t } from '../../styles/Theme';

export const SideBarMenu = styled.aside`
  width: 35rem;
  height: 100vh;
  background-color: ${t.colors.primary[1]};
  color: ${t.colors.white[1]};
  position: fixed;

  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 2.2rem;
    margin-top: 5rem;

    a {
      text-decoration: none;
      color: inherit;
    }
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  margin-top: 10rem;
  padding-inline-start: 0;

  li {
    width: 100%;

    &:not(:last-of-type) {
      margin-bottom: 2rem;
    }
  }
`;

export const MenuLink = styled(Link)`
  display: inline-block;
  padding: 1rem 0 1rem;
  width: 100%;
  font-size: 2rem;
  color: ${t.colors.white[1]};
  text-decoration: none;
  transition: all 0.1s;

  div {
    display: inline-block;
    padding: 0.5rem 1rem;
    margin: 0 2rem 0 5rem;
    background-color: ${t.colors.primary[2]};
    border-radius: 0.5rem;
  }

  span {
    color: ${t.colors.primary[2]};
  }

  &:hover {
    background-color: ${t.colors.primary[3]};
  }

  &:hover span {
    color: ${t.colors.white[1]};
  }
`;
