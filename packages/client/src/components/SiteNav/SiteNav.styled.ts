import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { theme as t } from '../../styles/Theme';

export const Navigation = styled.header`
  width: 100%;
  height: 8rem;
  background-color: ${t.colors.white[1]};
  box-shadow: ${t.shadow[1]};

  nav {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 3rem;
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;

  li {
    &:not(:last-of-type) {
      margin-right: 2rem;
    }
  }
`;

export const Link = styled(NavLink)`
  font-size: 1.8rem;
  text-decoration: none;
  color: ${t.colors.primary[1]};
  border-bottom: 2px solid transparent;
  padding-bottom: 0.5rem;

  &:hover {
    color: ${t.colors.primary[2]};
    border-bottom: 2px solid ${t.colors.primary[2]};
  }
`;
