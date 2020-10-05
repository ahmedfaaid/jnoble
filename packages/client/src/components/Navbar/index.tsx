import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { container } from '../../styles/common';
import { theme as t } from '../../styles/theme';
import AuthButton from '../AuthButton';

const StyledNavbar = styled.nav`
  ${container};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem;
`;

const NavList = styled.div`
  ul {
    display: flex;

    li {
      :not(:last-of-type) {
        margin-right: 3rem;
      }
    }
  }
`;

const StyledAnchor = styled.a`
  font-size: 1.6rem;
  text-decoration: none;
  color: ${t.colors.secondaryColor};
  text-transform: uppercase;

  &:hover {
    color: ${t.colors.white};
  }
`;

function Navbar() {
  return (
    <StyledNavbar>
      <Link to='/'>
        <StyledAnchor>JNoble</StyledAnchor>
      </Link>
      <NavList>
        <ul>
          <li>
            <Link to='how-it-works'>
              <StyledAnchor>How It Works</StyledAnchor>
            </Link>
          </li>
          <li>
            <Link to='/about'>
              <StyledAnchor>About</StyledAnchor>
            </Link>
          </li>
          <li>
            <Link to='/talent'>
              <StyledAnchor>Talent Area</StyledAnchor>
            </Link>
          </li>
          <li>
            <Link to='/employer'>
              <StyledAnchor>Employer Area</StyledAnchor>
            </Link>
          </li>
        </ul>
      </NavList>
      <div>
        <AuthButton name='login' />
        <AuthButton name='signup' />
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
