import React, { ReactNode, FC } from 'react';
import Helmet from 'react-helmet';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Helmet>
        <link
          href='https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2:wght@400;700&family=Open+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
