import { ReactNode } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

interface LayoutProps {
  children: ReactNode;
}

const PageLayout = styled.div`
  display: flex;
`;

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Helmet>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <div>
        <PageLayout>
          <Sidebar />
          <div style={{ width: '100%' }}>
            <Topbar />
            <main>{children}</main>
          </div>
        </PageLayout>
      </div>
    </>
  );
}
