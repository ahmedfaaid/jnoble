import { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { theme as t } from '../styles/Theme';
import SiteNav from './SiteNav';

interface LayoutProps {
  children: ReactNode;
  page: string;
}

export const HomePage = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${t.colors.white[2]};
`;

export default function SiteLayout({ children, page }: LayoutProps) {
  return (
    <>
      <Helmet>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap'
          rel='stylesheet'
        />
        <title>{page} - JNoble</title>
      </Helmet>
      <HomePage>
        <SiteNav />
        {children}
      </HomePage>
    </>
  );
}
