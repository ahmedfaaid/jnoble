import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const StyledHeader = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.4);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

function Layout({ children }: LayoutProps) {
  return (
    <div style={{ position: 'relative' }}>
      <Helmet>
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Open+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <StyledHeader>
        <Navbar />
      </StyledHeader>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
