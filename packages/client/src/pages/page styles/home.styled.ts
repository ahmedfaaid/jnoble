import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { theme as t } from '../../styles/Theme';

export const HomePage = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${t.colors.white[2]};
`;

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

export const Hero = styled.section`
  width: 100%;
  height: calc(100vh - 8rem);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  h1 {
    margin-bottom: 8rem;
    font-size: 5rem;
    text-transform: uppercase;
  }

  img {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40rem;
  }
`;
